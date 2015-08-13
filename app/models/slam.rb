class Slam < ActiveRecord::Base

  validates :email, :username, :body, :mode, :likes, :initiator, presence: true

  belongs_to(
    :initiator,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
  )

end
