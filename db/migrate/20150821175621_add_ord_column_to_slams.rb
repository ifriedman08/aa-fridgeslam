class AddOrdColumnToSlams < ActiveRecord::Migration
  def change
    add_column :slams, :ord, :integer, null: false, default: 0
  end
end
