json.extract!(@user, :id, :username, :slams)

json.pending_friendships do
  json.array! @user.pending_invited do |pending|
    json.extract!(pending, :id, :username)
  end
end
#
# json.friends do
#   json.array!(@user.friends, :id)
# end
