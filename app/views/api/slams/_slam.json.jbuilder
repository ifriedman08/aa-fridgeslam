json.slam do
  json.extract!(slam, :body, :title, :user_id, :id, :created_at, :updated_at, :mode)
  json.likes slam.likes.length
end
json.user do
  json.extract!(slam.user, :id, :username)
end
