#!/bin/bash

echo "🚀 Final publish solution..."

# 确保 registry 设置
npm config set registry http://localhost:4873

echo "📦 Current package versions:"
echo "- @pf/libs: $(cd packages/libs && node -p "require('./package.json').version")"
echo "- @pf/ui: $(cd packages/ui && node -p "require('./package.json').version")"  
echo "- @pf/hooks: $(cd packages/hooks && node -p "require('./package.json').version")"
echo "- @pf/dapp: $(cd apps/dapp && node -p "require('./package.json').version")"

echo ""
echo "🔍 Packages with git changes:"
git status --porcelain packages/ apps/ | grep -E "\.(js|ts|tsx|json)$" | head -10

echo ""
echo "📋 Choose what to publish:"
echo "1) Publish @pf/libs"
echo "2) Publish @pf/ui" 
echo "3) Publish @pf/hooks"
echo "4) Publish @pf/dapp"
echo "5) Publish all changed packages"
echo "0) Exit"

read -p "Enter your choice: " choice

publish_package() {
    local pkg_path=$1
    local pkg_name=$2
    
    echo "📤 Publishing $pkg_name..."
    cd "$pkg_path"
    
    # 先尝试发布当前版本
    npm publish --registry http://localhost:4873 2>/dev/null
    
    if [ $? -ne 0 ]; then
        echo "⬆️  Current version exists, bumping to patch version..."
        npm version patch --no-git-tag-version
        npm publish --registry http://localhost:4873
    fi
    
    cd - >/dev/null
    echo "✅ $pkg_name published successfully"
}

case $choice in
    1) publish_package "packages/libs" "@pf/libs" ;;
    2) publish_package "packages/ui" "@pf/ui" ;;
    3) publish_package "packages/hooks" "@pf/hooks" ;;
    4) publish_package "apps/dapp" "@pf/dapp" ;;
    5) 
        publish_package "packages/libs" "@pf/libs"
        publish_package "packages/ui" "@pf/ui"
        publish_package "packages/hooks" "@pf/hooks"
        publish_package "apps/dapp" "@pf/dapp"
        ;;
    0) echo "👋 Exiting..."; exit 0 ;;
    *) echo "❌ Invalid choice"; exit 1 ;;
esac

echo "🎉 Publish completed!"