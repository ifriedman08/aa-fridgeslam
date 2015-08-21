# == Schema Information
#
# Table name: slams
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  body       :string           default([]), not null, is an Array
#  title      :string           not null
#  pending    :boolean          default(TRUE), not null
#  mode       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Slam < ActiveRecord::Base

  validates :title, :body, :mode, :user, presence: true

  # attr_accessor :member_ids
  after_initialize :ensure_current_user_id
  def current_slammer
    if self.mode == 'group'
      self.slammer_ids.first
    else
      self.user_id
    end
  end

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  )

  has_many(
    :slam_memberships,
    primary_key: :id,
    foreign_key: :slam_id,
    class_name: 'SlamMembership'
  )

  has_many(
    :members,
    through: :slam_memberships,
    source: :user
  )

  has_many(
    :likes
  )

  def ensure_current_user_id
    self.current_slammer_id ||= self.user_id
  end
end
