class CreateUserTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :user_topics do |t|
      t.integer :user_id, null: false
      t.integer :topic_id, null: false

      t.timestamps
    end
    add_index :user_topics, :user_id
    add_index :user_topics, :topic_id
  end
end
