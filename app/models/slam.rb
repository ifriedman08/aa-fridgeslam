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
  before_save :update_ord

  # def filter_pending(current_id)
  #   sql = "SELECT * FROM slams
  #   WHERE slammer_ids[?] = ?;"
  #   self.class.find_by_sql([sql, self.ord, current_id])
  # end

  def current_slammer
    if self.mode == 'group'
      self.slammer_ids.first
    else
      self.user_id
    end
  end

  def authors
    result = []
    self.slammer_ids.each do |i|
      result.push(User.find(i).username)
    end
    result
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

  def update_ord
    self.ord = (self.ord + 1) % self.slammer_ids.length
  end
end
