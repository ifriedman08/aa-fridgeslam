class SoloSlam < ActiveRecord::Base
  validates :user, :title, :body, presence: true
  validates :body, length: {minimum: 7}

  # attr_accessor :pending, :likes

  belongs_to(
    :user
  )

  has_many(
    :likes,
    as: :likeable
  )

  def add_like
    self.likes += 1
  end

  def add(word)
    self.body.push(word)
  end

  def to_string
    self.body.join(' ')
  end

  def status_complete
    self.pending = false
  end

  def set_likes
    self.likes = 0
  end
end
