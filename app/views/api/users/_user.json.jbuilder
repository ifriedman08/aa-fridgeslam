json.extract!(user, :id, :username, :slams)

friendship = user.friendships.find_by_friend_id(current_user.id)
if friendship
  json.friendship_id(friendship.id)
end
