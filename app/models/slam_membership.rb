class SlamMembership < ActiveRecord::Base

  validates :user_id, :slam_id, presence: true
  validates uniqueness: {scope: [:user_id, :slam_id]}

  belongs_to(
    :user
  )

  belongs_to(
    :slam
  )

end
