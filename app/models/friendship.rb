class Friendship < ActiveRecord::Base
  belongs_to :friend, class_name: :User
  belongs_to :friendable, class_name: :User

  def friend_username
    friendable.username
    # return User.find(self.friend_id).username unless self.friend_id == current_user.id
    # return User.find(self.friendable_id).username unless self.friendable_id == current_user.id
  end


end
