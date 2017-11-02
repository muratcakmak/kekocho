class Topic < ApplicationRecord
  has_many :user_topics
  has_many :question_topics, dependent: :destroy, inverse_of: :topic
  has_many :questions, through: :question_topics
end
