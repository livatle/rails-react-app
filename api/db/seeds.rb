# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: 'test1', email: 'test@example.com', password: 'password', password_confirmation: 'password')
User.create!(name: 'test2', email: 'test2@example.com', password: 'password', password_confirmation: 'password')

user1 = User.find(1)
post1 = Post.create!(name: 'アダマトラオレ', content: 'バルサのエッセンスを失ったことはない', user: user1)

post2 = Post.create!(name: 'デンベレ', content: '年俸18億欲しい', user: user1)


user2 = User.find(2)
post3 = Post.create!(name: 'ロバートソン', content: 'Hatate serious player!', user: user2)


post4 = Post.create!(name: '森保一', content: '戦うよー', user: user2)