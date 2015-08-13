class RemoveLikesColumn < ActiveRecord::Migration
  def change
    remove_column :slams, :likes
  end
end
