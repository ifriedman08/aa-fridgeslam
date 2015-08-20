json.partial! 'user', user: @user

json.friends do
  json.array! @user.friends do |friend|
    json.extract!(friend, :id, :username, :email)
  end
end

json.friendees do
  json.array! @user.friendships do |friendship|
    json.extract!(friendship, :friend_id, :pending)
  end
end

json.pending_inviters do
  json.array! @user.pending_invited_by do |inviter|
    json.extract!(inviter, :id, :username)
  end
end
