# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

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

  def self.search(search)
    if search
      where('username LIKE ?', "%#{search}%")
    else
      self.all
    end
  end

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

  def pending_slams_num
    # fail
    # Slam.where("pending = true AND slammer_ids[1] = ?", self.id)
    self.slams.select{|slam| slam.pending}.concat(Slam.where("pending = true AND slammer_ids[1] = ?", self.id)).length
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
