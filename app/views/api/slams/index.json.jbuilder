json.array!(@top_slams) do |slam|
  json.partial!("/api/slams/slam", slam: slam)
end

json.array!(@new_slams) do |slam|
  json.partial!("/api/slams/slam", slam: slam)
end

json.array!(@pending_slams) do |slam|
  json.partial!("/api/slams/slam", slam: slam)
end
