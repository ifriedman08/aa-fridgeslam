# if slam.mode == 'solo'
#   json.extract!(slam, :body, :title, :user_id, :id, :created_at, :updated_at, :mode, :pending, )
#   json.likes slam.likes
#
#   json.user do
#     json.extract!(slam.user, :id, :username)
#   end
# else

json.extract!(slam, :body, :title, :user_id, :id, :created_at, :updated_at, :mode, :pending, :slammer_ids, :ord, :authors)
json.likes slam.likes

json.user do
  json.extract!(slam.user, :id, :username)
end
