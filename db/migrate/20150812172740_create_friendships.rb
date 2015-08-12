class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :user1, null: false
      t.integer :user2, null: false

      t.timestamps null: false
    end
  end
end
