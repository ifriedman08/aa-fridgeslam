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

User.create!(
  username: 'guest123',
  email: 'guest123@aa.io',
  password_digest: "$2a$10$RLDuQJTJHUcSbhkcYbwa1uN3lmPvANb7x0P4k6P.NBTc3JiT8bwfC")

70.times do
  name = Faker::Name.first_name
  user = User.new(
    username: Faker::Internet.user_name(name),
    email: Faker::Internet.free_email(name),
    password_digest: BCrypt::Password.create('password')
  )
  if !user.save
    redo
  end
end

300.times do
  Slam.create!(
    user_id: Random.rand(User.all.length - 12) + 6,
    body: LiterateRandomizer.sentence.split +
          LiterateRandomizer.sentence.split +
          LiterateRandomizer.sentence.split,
    title: LiterateRandomizer.sentence,
    pending: [true, false].sample,
    mode: 'solo',
    # likes: Random.rand(50000) + 2
  )
end
