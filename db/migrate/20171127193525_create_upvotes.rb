class CreateUpvotes < ActiveRecord::Migration[5.1]
  def change
    create_table :upvotes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :upvotes, :question_id
    add_index :upvotes, :user_id
  end
end
