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

  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  )

  has_many(
    :likes
  )

end
