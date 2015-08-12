class CreateSoloSlams < ActiveRecord::Migration
  def change
    create_table :solo_slams do |t|

      t.integer :user_id, null: false
      t.string :body, array: true, default: [], null: false
      t.string :title, null: false
      t.boolean :pending, null: false, default: true
      t.integer :likes, null: false, default: 0

      t.timestamps null: false
    end
  end
end
