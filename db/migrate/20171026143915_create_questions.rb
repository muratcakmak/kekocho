class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :body, null: false
      t.integer :question_author_id

      t.timestamps
    end
  end
end
