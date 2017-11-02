class QuestionTopic < ApplicationRecord
  validates :question, :topic, presence: true
  validates :topic_id, uniqueness: { scope: :question_id }

  belongs_to :question
  belongs_to :topic
end
