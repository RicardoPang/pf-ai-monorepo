#!/bin/bash

# 确保使用本地 registry
npm config set registry http://localhost:4873

# 按依赖顺序发布包
echo "Publishing @pf/libs..."
cd packages/libs && npm publish
cd ../..

echo "Publishing @pf/ui..."
cd packages/ui && npm publish
cd ../..

echo "Publishing @pf/hooks..."
cd packages/hooks && npm publish
cd ../..

echo "Publishing @pf/dapp..."
cd apps/dapp && npm publish
cd ../..

echo "All packages published successfully!"

# 重置 git 变更
echo "Resetting git changes..."
git restore apps/dapp/CHANGELOG.md apps/dapp/package.json packages/hooks/CHANGELOG.md packages/hooks/package.json packages/libs/CHANGELOG.md packages/libs/package.json packages/ui/CHANGELOG.md packages/ui/package.json 2>/dev/null || true

echo "Done!"