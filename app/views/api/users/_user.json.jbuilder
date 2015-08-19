json.extract!(user, :id, :username)

json.friendship_id(user.friendships.find_by_friend_id(current_user.id).try(:id))
