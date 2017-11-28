class CreateUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.integer :answer_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :upvotes, :answer_id
    add_index :upvotes, :user_id
  end
end
