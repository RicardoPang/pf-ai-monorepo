#!/bin/bash

echo "🚀 Clean Lerna Publish Process..."

# 保存当前工作目录状态
echo "💾 Saving git state..."
git stash push -m "temp-stash-before-lerna" --include-untracked --quiet 2>/dev/null || true

# 确保已登录
if ! npm whoami --registry http://localhost:4873 >/dev/null 2>&1; then
    echo "🔐 Please login first:"
    npm login --registry http://localhost:4873
fi

# 运行 lerna publish
echo "📦 Running lerna publish..."
npx lerna publish --registry http://localhost:4873

# 如果 lerna 失败，手动发布已更新版本的包
if [ $? -ne 0 ]; then
    echo "⚠️  Lerna publish failed, trying manual publish..."
    
    # 检查并发布每个包
    for pkg_dir in packages/* apps/*; do
        if [ -d "$pkg_dir" ] && [ -f "$pkg_dir/package.json" ]; then
            cd "$pkg_dir"
            pkg_name=$(node -p "require('./package.json').name" 2>/dev/null || echo "")
            pkg_version=$(node -p "require('./package.json').version" 2>/dev/null || echo "")
            
            if [ -n "$pkg_name" ] && [ -n "$pkg_version" ]; then
                echo "🔍 Checking $pkg_name@$pkg_version..."
                
                # 检查版本是否已发布
                if ! npm view "$pkg_name@$pkg_version" --registry http://localhost:4873 >/dev/null 2>&1; then
                    echo "📤 Publishing $pkg_name@$pkg_version..."
                    npm publish --registry http://localhost:4873 2>/dev/null || echo "❌ Failed to publish $pkg_name"
                else
                    echo "✅ $pkg_name@$pkg_version already published"
                fi
            fi
            cd - >/dev/null
        fi
    done
fi

# 检查是否有版本文件变更
if git status --porcelain | grep -E "(package\.json|CHANGELOG\.md)"; then
    echo "🧹 Cleaning up version changes..."
    # 重置所有版本相关的变更
    git checkout HEAD -- "**/package.json" "**/CHANGELOG.md" 2>/dev/null || true
    git clean -fd 2>/dev/null || true
fi

# 恢复之前的状态
echo "🔄 Restoring git state..."
git stash pop --quiet 2>/dev/null || true

echo "✅ Clean publish completed!"
echo ""
echo "📋 Verify published versions at: http://localhost:4873"