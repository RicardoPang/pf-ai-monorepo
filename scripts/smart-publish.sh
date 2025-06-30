#!/bin/bash

echo "🚀 Smart publish process..."

# 设置 registry
npm config set registry http://localhost:4873

# 检查登录状态
if ! npm whoami >/dev/null 2>&1; then
    echo "🔐 Please login:"
    npm login --registry http://localhost:4873
fi

echo "✅ Logged in as: $(npm whoami)"

# 检查已发布的版本
check_published_version() {
    local pkg_name=$1
    npm view $pkg_name version --registry http://localhost:4873 2>/dev/null || echo "0.0.0"
}

# 智能发布函数
smart_publish() {
    local pkg_path=$1
    local pkg_name=$2
    
    cd "$pkg_path"
    
    # 获取当前本地版本
    local current_version=$(node -p "require('./package.json').version")
    
    # 获取已发布的最新版本
    local published_version=$(check_published_version $pkg_name)
    
    echo "📦 $pkg_name:"
    echo "   Local: $current_version"
    echo "   Published: $published_version"
    
    # 比较版本，如果本地版本不大于已发布版本，则升级
    if [[ "$current_version" == "$published_version" ]]; then
        echo "⬆️  Bumping version..."
        npm version patch --no-git-tag-version >/dev/null
        local new_version=$(node -p "require('./package.json').version")
        echo "   New version: $new_version"
    fi
    
    # 发布
    echo "📤 Publishing..."
    if npm publish --registry http://localhost:4873 >/dev/null 2>&1; then
        echo "✅ Published successfully"
    else
        echo "❌ Publish failed"
    fi
    
    cd - >/dev/null
}

# 检查哪些包有变化
echo ""
echo "🔍 Checking for changes..."

if git diff --quiet packages/libs/; then
    echo "✅ @pf/libs - no changes"
else
    echo "📝 @pf/libs - has changes"
    smart_publish "packages/libs" "@pf/libs"
fi

if git diff --quiet packages/ui/; then
    echo "✅ @pf/ui - no changes"  
else
    echo "📝 @pf/ui - has changes"
    smart_publish "packages/ui" "@pf/ui"
fi

if git diff --quiet packages/hooks/; then
    echo "✅ @pf/hooks - no changes"
else
    echo "📝 @pf/hooks - has changes"
    smart_publish "packages/hooks" "@pf/hooks"
fi

if git diff --quiet apps/dapp/; then
    echo "✅ @pf/dapp - no changes"
else
    echo "📝 @pf/dapp - has changes"
    smart_publish "apps/dapp" "@pf/dapp"
fi

echo ""
echo "🎉 Smart publish completed!"
echo ""
echo "📋 Final versions:"
echo "- @pf/libs: $(cd packages/libs && node -p "require('./package.json').version")"
echo "- @pf/ui: $(cd packages/ui && node -p "require('./package.json').version")"
echo "- @pf/hooks: $(cd packages/hooks && node -p "require('./package.json').version")"
echo "- @pf/dapp: $(cd apps/dapp && node -p "require('./package.json').version")"