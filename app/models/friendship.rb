class Friendship < ActiveRecord::Base

  belongs_to(
    :user1,
    primary_key: :id,
    foreign_key_: :user1_id,
    class_name: 'User'
  )

  belongs_to(
    :user2,
    primary_key: :id,
    foreign_key_: :user2_id,
    class_name: 'User'
  )
end
