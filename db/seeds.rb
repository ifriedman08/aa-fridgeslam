# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: 'ivan123',
  email: 'ivan123@aa.io',
  password_digest: "$2a$10$ihw3ybuyvTBmskETgsXGiOCca.4QDykyo8LUP71nNfJ2Rck5f5Doq")

  User.create!(
    username: 'bodie123',
    email: 'bodie123@aa.io',
    password_digest: "$2a$10$ZfXPB/AYKdCQE0czhzNpweLmxYdNvSs3XlUYhgGRkE9tAG.4T9XfW")

Slam.create!(user_id: 1, body: ['this', 'is', 'the', 'first', 'super', 'duper', 'poem'], title: 'poem#1', mode: 'solo')
Slam.create!(user_id: 1, body: ['this', 'is', 'the', 'second', 'poem', '.', 'Holla', ',', 'Bollah'], title: 'titlelesst', mode: 'solo')
Slam.create!(user_id: 2, body: ['this', 'is', 'the', 'third', 'poem', 'boogie', 'woogie'], title: 'boogie boogie', mode: 'solo')
Slam.create!(user_id: 2, body: ['this', 'iwdcdjbs', 'wdjwlecbthe', 'third', 'poem', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo')
