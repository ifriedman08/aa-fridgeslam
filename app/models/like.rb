# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  slam_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base

  validates :user_id, :slam_id, presence: true
  validates_uniqueness_of :slam_id, scope: [:user_id]
  # validates_uniqueness_of :user_id, scope: [:slam_id]
  validate :cant_like_own_slam

  belongs_to(
    :slam,
  )

  belongs_to(
    :user
  )

  def cant_like_own_slam
    if self.user.id == self.slam.user_id
      errors.add(:like, "can't like your own slam")
    end
  end
end
