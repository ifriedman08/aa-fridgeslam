json.(slam, :id, :title, :created_at, :updated_at, :body)
json.user do
  json.extract!(slam.user, :id, :username)
end
