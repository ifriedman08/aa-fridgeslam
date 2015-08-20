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

require 'test_helper'

class SlamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
