class Like < ActiveRecord::Base

  validates :user, :likeable, presence: true
  validates :like, uniqueness: { scope: [:user, :likeable] }

  # def slam_type
  #   puts self.class
  #   byebug
  # end

  belongs_to(
    :likeable,
    polymorphic: true
  )

  belongs_to(
    :user
  )

end
