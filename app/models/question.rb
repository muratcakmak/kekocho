class Question < ApplicationRecord
  include PgSearch
  multisearchable :against => [:body]
  belongs_to :question_author,
   foreign_key: :question_author_id,
   class_name: :User

  has_many :answers, dependent: :destroy

  has_many :question_topics
  has_many :topics,
    through: :question_topics,
    source: :topic
end
