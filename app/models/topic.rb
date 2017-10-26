class Topic < ApplicationRecord
  has_many :user_topics
  has_many :question_topics
end
