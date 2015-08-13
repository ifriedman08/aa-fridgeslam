# json.array!(@new_slams) do |slam|
#   json.partial!("/api/slams/slam", new_slam: slam)
# end
#
# json.array!(@pending_slams) do |slam|
#   json.partial!("/api/slams/slam", pending_slam: slam)
# end
#
# json.array!(@top_slams) do |slam|
#   json.partial!("/api/slams/slam", collection: @top_slams, locals)
# end
#
# json.array! @slams do |slam|
#   json.partial!("/api/slams/slam", slam: slam)
# end

# json.top_slams do
#   json.partial! partial: '/api/slams/slam', collection: @top_slams, as: :slam
# end
#
# json.new_slams do
#   json.partial! partial: '/api/slams/slam', collection: @new_slams, as: :slam
# end
#
# json.pending_slams do
#   json.partial! partial: '/api/slams/slam', collection: @pending_slams, as: :slam
# end

# json.array!([@top_slams, @new_slams, @pending_slams]) do |list|
#   json.array!(list) do |slam|
#     json.partial!("/api/slams/slam", slam: slam)
#   end
# end

json.array! @slams do |slam|
  json.partial! 'slam', slam: slam
end
