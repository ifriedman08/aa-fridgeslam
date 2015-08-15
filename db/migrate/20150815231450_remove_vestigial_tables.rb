class RemoveVestigialTables < ActiveRecord::Migration
  def change
    drop_table :solo_slams
    drop_table :group_slams 
  end
end
