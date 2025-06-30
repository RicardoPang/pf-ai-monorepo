#!/bin/bash

echo "🚀 Starting clean publish process..."

# 保存当前 git 状态
echo "💾 Saving current git state..."
git stash push -m "auto-stash before publish" --include-untracked

# 确保使用本地 registry 并登录
npm config set registry http://localhost:4873

# 检查登录状态
if ! npm whoami >/dev/null 2>&1; then
    echo "⚠️  Please login to npm registry:"
    npm login --registry http://localhost:4873
fi

# 获取所有改变的包
echo "📋 Detecting changed packages..."
CHANGED_PACKAGES=$(npx lerna changed --parseable 2>/dev/null || echo "")

if [ -z "$CHANGED_PACKAGES" ]; then
    echo "✅ No packages have changed"
    git stash pop 2>/dev/null || true
    exit 0
fi

echo "📦 Changed packages detected:"
echo "$CHANGED_PACKAGES" | xargs -I {} basename {}

# 手动递增版本并发布
for package_path in $CHANGED_PACKAGES; do
    package_name=$(basename "$package_path")
    echo "🔄 Processing $package_name..."
    
    cd "$package_path"
    
    # 获取当前版本
    current_version=$(node -p "require('./package.json').version")
    
    # 计算新版本 (patch increment)
    IFS='.' read -ra ADDR <<< "$current_version"
    new_patch=$((${ADDR[2]} + 1))
    new_version="${ADDR[0]}.${ADDR[1]}.$new_patch"
    
    echo "📈 $package_name: $current_version → $new_version"
    
    # 临时更新版本并发布
    npm version $new_version --no-git-tag-version
    npm publish --registry http://localhost:4873
    
    cd - >/dev/null
done

# 恢复 git 状态
echo "🧹 Restoring git state..."
git reset --hard HEAD
git stash pop 2>/dev/null || true

echo "✅ Clean publish completed!"