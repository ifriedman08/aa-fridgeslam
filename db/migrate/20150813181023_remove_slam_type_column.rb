class RemoveSlamTypeColumn < ActiveRecord::Migration
  def change
    remove_column :likes, :slam_type
  end
end
