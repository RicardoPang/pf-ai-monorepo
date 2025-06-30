#!/bin/bash

echo "🚀 Manual publish process..."

# 设置 registry
npm config set registry http://localhost:4873

echo "📋 Current package versions:"
echo "1) @pf/libs: $(cd packages/libs && node -p "require('./package.json').version")"
echo "2) @pf/ui: $(cd packages/ui && node -p "require('./package.json').version")"
echo "3) @pf/hooks: $(cd packages/hooks && node -p "require('./package.json').version")"
echo "4) @pf/dapp: $(cd apps/dapp && node -p "require('./package.json').version")"

echo ""
echo "Which package do you want to publish?"
echo "1) @pf/libs"
echo "2) @pf/ui" 
echo "3) @pf/hooks"
echo "4) @pf/dapp"
echo "5) All packages"
echo "0) Exit"

read -p "Enter choice (0-5): " choice

publish_single() {
    local pkg_path=$1
    local pkg_name=$2
    
    echo "📤 Publishing $pkg_name..."
    cd "$pkg_path"
    
    # 升级版本
    npm version patch --no-git-tag-version
    local new_version=$(node -p "require('./package.json').version")
    echo "🔼 New version: $new_version"
    
    # 发布
    npm publish --registry http://localhost:4873
    
    if [ $? -eq 0 ]; then
        echo "✅ $pkg_name published successfully!"
    else
        echo "❌ Failed to publish $pkg_name"
    fi
    
    cd - >/dev/null
}

case $choice in
    1) publish_single "packages/libs" "@pf/libs" ;;
    2) publish_single "packages/ui" "@pf/ui" ;;
    3) publish_single "packages/hooks" "@pf/hooks" ;;
    4) publish_single "apps/dapp" "@pf/dapp" ;;
    5) 
        publish_single "packages/libs" "@pf/libs"
        publish_single "packages/ui" "@pf/ui" 
        publish_single "packages/hooks" "@pf/hooks"
        publish_single "apps/dapp" "@pf/dapp"
        ;;
    0) echo "👋 Bye!"; exit 0 ;;
    *) echo "❌ Invalid choice"; exit 1 ;;
esac

echo "🎉 Done!"