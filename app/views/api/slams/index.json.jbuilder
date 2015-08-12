json.array!(@slams) do |slam|
  json.partial!("/api/slams/slam", slam: slam)
end
