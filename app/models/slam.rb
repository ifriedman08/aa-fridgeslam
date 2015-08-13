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
