class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :comment_author_id, null: false
      t.integer :answer_id, null: false

      t.timestamps
    end
    add_index :comments, :comment_author_id
    add_index :comments, :answer_id
  end
end
