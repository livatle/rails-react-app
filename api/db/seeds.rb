# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(name: 'test1', email: 'test1@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test2', email: 'test2@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test3', email: 'test3@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test4', email: 'test4@example.com', password: 'password', password_confirmation: 'password')

user1 = User.find(1)
post1 = Post.create!(content: 'バルサのエッセンスを失ったことはない', user: user1)
post2 = Post.create!(content: '年俸18億円欲しいなー', user: user1)


user2 = User.find(2)
post3 = Post.create!(content: 'ユニフォームを守ることだけを考えろ', user: user2)
post4 = Post.create!(content: 'タキは今本当に調子がいいんだ', user: user2)

user3 = User.find(3)
post5 = Post.create!(content: 'トッテナムは多くをためらった', user: user3)

user4 = User.find(4)
post6 = Post.create!(content: '自分で切り開いて拓く', user: user4)
