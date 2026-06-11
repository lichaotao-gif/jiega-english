#!/bin/sh
# 一键提交并推送到 GitHub
# 用法：在终端里运行  sh deploy.sh
set -e
cd "$(dirname "$0")"

# 清掉可能残留的锁文件
rm -f .git/index.lock

git add -A
git commit -m "feat: Supabase 登录注册与云同步、资料编辑、头像、UI 优化" || echo "（没有新的改动需要提交）"
git push

echo ""
echo "✅ 已推送到 GitHub。接下来去 vercel.com 导入 jiega-english 仓库部署。"
