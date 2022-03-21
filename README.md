# FOOTHUB

SPAに動く自由につぶやき可能な掲示板アプリです。(認証付き)

URL: http://18.180.221.171 ✳︎推奨ブラウザはchromeです。(レスポンシブ非対応)

reactとrailsの学習のアウトプットとして作成しました。

# 技術スタック

・Frontend: React(create-react-app/Material-UI)
・Backend: Rails(APImode) + Nginx(upstream unisorn-socket)
・Infra: AWS(EC2)
・Database: MySQL

# 実装機能
ログイン前
・投稿一覧機能(ページネーション)
・認証機能(devise-token-auth)

ログイン後
・投稿一覧機能(ページネーション)
・投稿のCRUD機能(作成、詳細、編集、削除)
・投稿のいいね機能(投稿詳細ページにボタンを設置)
・ユーザーのフォロー機能(ユーザー投稿ページにボタンを設置)