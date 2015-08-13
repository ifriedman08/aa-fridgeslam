class CreateSlamMemberships < ActiveRecord::Migration
  def change
    create_table :slam_memberships do |t|
      t.integer :user_id, null: false
      t.integer :slam_id, null: false

      t.timestamps null: false
    end
  end
end
