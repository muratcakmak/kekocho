class Topic < ApplicationRecord
  has_many :user_topics
  has_many :question_topics, dependent: :destroy, inverse_of: :tag
  has_many :question, through: :question_topics
end
