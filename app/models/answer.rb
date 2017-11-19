class Answer < ApplicationRecord
  validates :body, presence: true
  belongs_to :question
  belongs_to :answer_author,
    foreign_key: :answer_author_id,
    class_name: :User
  has_many :comments, dependent: :destroy
end
