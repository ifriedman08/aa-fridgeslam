class Like < ActiveRecord::Base

  validates :user, :slam_id, presence: true
  # validates :user_id, uniqueness: { scope: [:slam_type, :slam_id] }

  belongs_to(
    :slam,
  )

  belongs_to(
    :user
  )

end
