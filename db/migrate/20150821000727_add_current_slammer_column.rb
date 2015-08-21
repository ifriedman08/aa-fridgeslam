class AddCurrentSlammerColumn < ActiveRecord::Migration
  def change
    add_column :slams, :current_slammer_id, :integer, null: false
  end
end
