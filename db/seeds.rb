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

  User.create!(
    username: 'martha123',
    email: 'martha123@aa.io',
    password_digest: "$2a$10$6ArceSoi0hupWpiLPZ1emeUh.asQZIAOGC.GRy5k9T4tlZeaTzHjK")

Slam.create!(user_id: 1, body: ['this', 'is', 'the', 'first', 'super', 'duper', 'poem'], title: 'poem#1', mode: 'solo', pending: false)
Slam.create!(user_id: 1, body: ['this', 'is', 'the', 'secodvevnd', 'pervervoem', '.', 'Hoervlla', ',', 'Bollah'], title: 'titlelesst', mode: 'solo', pending: false)
Slam.create!(user_id: 1, body: ['this', 'is', 'the', 'secervervond', 'poem', '.', 'Holla', ',', 'Bollah'], title: 'titlelesst', mode: 'solo')
Slam.create!(user_id: 1, body: ['this', 'iervevs', 'the', 'second', 'poem', '.', 'Holla', ',', 'Bo45345llah'], title: 'titlelesst', mode: 'solo')
Slam.create!(user_id: 2, body: ['this', 'is', 'the', 'third', 'poem', 'boogie', 'woogie'], title: 'boogie boogie', mode: 'solo')
Slam.create!(user_id: 2, body: ['this', 'iwdcdjbs', 'wdjwlecbthe', 'third', 'poe3453445m', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo', pending: false)
Slam.create!(user_id: 2, body: ['this', 'iwdcdjbs', 'wdjwlecbthe', 'third', 'poem', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo')
Slam.create!(user_id: 3, body: ['tvrqervqerhis', 'iwdcdjeqqvqbs', 'wdjwlecbthe', 'third', 'poem', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo')
Slam.create!(user_id: 3, body: ['this', 'iwdcdjbs', 'wdjwlec25345bthe', 'third', 'poem', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo')
Slam.create!(user_id: 3, body: ['this', 'iwdcdjbs', 'wdjwl345345ecbthe', 'third', 'po3453453em', 'boogie', 'woogie'], title: 'bowowowowow', mode: 'solo', pending: false)
