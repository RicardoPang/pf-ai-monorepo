#!/bin/bash

echo "🚀 Simple publish process..."

# 设置 registry 并检查登录状态
npm config set registry http://localhost:4873

# 只检查一次登录状态，登录后保持会话
if ! npm whoami >/dev/null 2>&1; then
    echo "🔐 Logging in to npm registry..."
    npm login --registry http://localhost:4873
fi

echo "✅ Logged in as: $(npm whoami)"

# 手动检测哪些包有变化并询问是否发布
echo "📋 Checking for changes..."

packages=("packages/libs" "packages/ui" "packages/hooks" "apps/dapp")

for pkg in "${packages[@]}"; do
    if [ -d "$pkg" ]; then
        cd "$pkg"
        pkg_name=$(node -p "require('./package.json').name")
        current_version=$(node -p "require('./package.json').version")
        
        # 检查是否有 git 变更
        if git status --porcelain . | grep -q .; then
            echo "📦 $pkg_name has changes (current: $current_version)"
            read -p "🔄 Bump version and publish $pkg_name? (y/n): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                # 询问版本类型
                echo "Select version bump type:"
                echo "1) Patch (${current_version%.*}.$((${current_version##*.} + 1)))"
                echo "2) Minor"
                echo "3) Major"
                read -p "Enter choice (1-3): " -n 1 -r version_type
                echo
                
                case $version_type in
                    1) npm version patch --no-git-tag-version ;;
                    2) npm version minor --no-git-tag-version ;;
                    3) npm version major --no-git-tag-version ;;
                    *) echo "Invalid choice, skipping..."; cd - >/dev/null; continue ;;
                esac
                
                echo "📤 Publishing $pkg_name..."
                npm publish --registry http://localhost:4873
                
                if [ $? -eq 0 ]; then
                    echo "✅ Successfully published $pkg_name"
                else
                    echo "❌ Failed to publish $pkg_name"
                fi
            fi
        else
            echo "✅ $pkg_name has no changes"
        fi
        cd - >/dev/null
    fi
done

echo "🎉 Publish process completed!"