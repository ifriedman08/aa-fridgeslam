class Like < ActiveRecord::Base

  validates :user_id, :slam_id, presence: true
  validates_uniqueness_of :slam_id, scope: [:user_id]
  validate :cant_like_own_slam

  belongs_to(
    :slam,
  )

  belongs_to(
    :user
  )

  def cant_like_own_slam
    if self.user.id == self.slam.user_id
      errors.add(:like, "can't be greater than total value")
    end
  end
end
