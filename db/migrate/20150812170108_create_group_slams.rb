class CreateGroupSlams < ActiveRecord::Migration
  def change
    create_table :group_slams do |t|

      t.integer :contributor_ids, array: true, default: [], null: false
      t.string :body, array: true, default: [], null: false
      t.string :title, null: false
      t.references :likeable, polymorphic: true, index: true
      t.boolean :pending, null: false, default: true
      t.integer :likes, null: false, default: 0

      t.timestamps null: false
    end
  end
end
