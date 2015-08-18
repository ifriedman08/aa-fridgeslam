json.extract!(@slam, :body, :title, :user_id, :id, :created_at, :body, :updated_at, :mode, :pending)
json.likes @slam.likes

json.user do
  json.extract!(@slam.user, :id, :username)
end
