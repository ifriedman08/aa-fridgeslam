json.array!(@slams) do |slam|
  json.partial!("slams/solo_slam", slam: slam)
end
