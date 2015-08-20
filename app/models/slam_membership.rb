# == Schema Information
#
# Table name: slam_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  slam_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SlamMembership < ActiveRecord::Base

  validates :user_id, :slam_id, presence: true
  validates :user_id, uniqueness: {scope: :slam_id}

  belongs_to(
    :user
  )

  belongs_to(
    :slam
  )

end
