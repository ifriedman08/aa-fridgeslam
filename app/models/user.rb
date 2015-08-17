class User < ActiveRecord::Base

  include Amistad::FriendModel

  validates :password_digest, :username, :email, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, :username, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token!

  has_many(
    :slams
  )

  has_many(
    :friends,
    through: :id,
    foreign_key: :user_1,
    class_name: 'Friendship'
  )

  has_many(
    :friendships,
    primary_key: :id,
    foreign_key: :user_1,
    class_name: 'Friendship'
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def pending_slams
    self.slams.select{|slam| slam.pending}
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
