# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: 'ジョタ', email: 'jota@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'フィルミーノ', email: 'firmino@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'サラー', email: 'salah@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'ヘンダーソン', email: 'henderson@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'マネ', email: 'mane@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'クロップ', email: 'klopp@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'タキ', email: 'taki@examile.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test1', email: 'test1@example.com', password: 'password', password_confirmation: 'password')

user1 = User.find(1)
user2 = User.find(2)
user3 = User.find(3)
user4 = User.find(4)
user5 = User.find(5)
user6 = User.find(6)
user7 = User.find(7)
user8 = User.find(8)

post1 = Post.create(content: 'リバプール大好きです。', user: user8)
post2 = Post.create!(content: 'ベンフィカはいいチームだけど、シティ戦の前後ってことを考えると悪くないドローだったね。
勿論、油断は全くないだろうけど。', user: user1)
post3 = Post.create!(content: 'アーノルドはアーセナル戦で負傷しちゃったようですね…　
治って治って…', user: user3)
post4 = Post.create!(content: 'チームが強い時弱い時色々見てきましたけど、やっぱりそこには選手とKOP、リヴァプールファンの支えがあるわけで,
それでもって今の強いリヴァプールがあると思います。', user: user4)
post5 = Post.create!(content: 'タキは今本当に調子がいいんだ', user: user6)
post6 = Post.create!(content: 'バイエルンはチアゴとアラバがいなくなってから後ろが不安定なイメージがありますね。', user: user5)
post7 = Post.create!(content: 'トップ4はリバプール、シティ、チェルシー、アーセナルで固いと思ってます。
ユナイテッドが現状から脱皮したら猛追してくる可能性が僅かにありますが、上位4チームがあらゆる面で抜けてる気がします。', user: user7)
post8 = Post.create!(content: 'フィルミーノはやはり至高、周りが活きる', user: user1)
post9 = Post.create!(content: 'アーセナルキラーの2人がやってくれましたね', user: user3)
post10 = Post.create!(content: 'ナイスゲーム！ シティの肩に手をかけた！ 直接対決でぶち抜かすぞ！', user: user4)
post11 = Post.create!(content: 'どうしてもスポット当たりにくいけど本当にファビーニョいてくれてよかったなぁ', user: user2)
post12 = Post.create!(content: 'チアゴ、ミスからのアシストは素晴らしい。
流石アーセナルキラージョタ！', user: user2)
