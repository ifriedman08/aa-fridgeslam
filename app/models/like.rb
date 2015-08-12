class Like < ActiveRecord::Base

  validates :user, :slam_type, :slam_id, presence: true
  validates :user_id, uniqueness: { scope: [:slam_type, :slam_id] }

  belongs_to(
    :likeable,
    polymorphic: true
  )

  belongs_to(
    :user
  )

end
