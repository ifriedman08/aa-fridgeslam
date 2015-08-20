json.extract!(user, :id, :username)

friendship = user.friendships.find_by_friend_id(current_user.id)
if friendship
  json.friendship_id(friendship.id)
end
