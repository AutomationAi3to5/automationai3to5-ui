#!/bin/bash
cd react-ui
npm install
npm run build
cd ..
mkdir -p public
cp -r react-ui/dist/* public/
echo "✅ Build complete - files in public/"
