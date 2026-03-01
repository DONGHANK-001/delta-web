name: Deploy to GitHub Pages

on:
  push:
    branches: [main] # 當您推送到 main 分支時觸發

permissions:
  contents: write # 允許 Actions 寫入 gh-pages 分支

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 📥
        uses: actions/checkout@v4

      - name: Install and Build 🏗️
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist # Vite 編譯後的資料夾名稱
          branch: gh-pages # 部署到的分支
