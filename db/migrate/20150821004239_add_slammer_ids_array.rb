class AddSlammerIdsArray < ActiveRecord::Migration
  def change
      add_column :slams, :slammer_ids, :integer, array: true, default: [], null: false
  end
end
