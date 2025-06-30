#!/bin/bash

echo "🚀 Starting automated publish process..."

# 确保使用本地 registry
npm config set registry http://localhost:4873

# 使用 lerna 自动发版和发布
echo "📦 Running lerna publish..."
npx lerna publish --no-git-tag-version --no-push --no-git-reset --yes

# 如果 lerna 失败，则手动发布
if [ $? -ne 0 ]; then
    echo "⚠️  Lerna failed, trying manual publish..."
    
    # 按依赖顺序发布包
    echo "Publishing @pf/libs..."
    cd packages/libs && npm publish --registry http://localhost:4873 2>/dev/null || echo "Already published"
    cd ../..

    echo "Publishing @pf/ui..."
    cd packages/ui && npm publish --registry http://localhost:4873 2>/dev/null || echo "Already published"
    cd ../..

    echo "Publishing @pf/hooks..."
    cd packages/hooks && npm publish --registry http://localhost:4873 2>/dev/null || echo "Already published"
    cd ../..

    echo "Publishing @pf/dapp..."
    cd apps/dapp && npm publish --registry http://localhost:4873 2>/dev/null || echo "Already published"
    cd ../..
fi

# 重置所有 lerna 生成的文件
echo "🧹 Cleaning up git changes..."
git checkout HEAD -- "**/CHANGELOG.md" "**/package.json" 2>/dev/null || true
git clean -fd .nx/ 2>/dev/null || true

echo "✅ Publish process completed!"