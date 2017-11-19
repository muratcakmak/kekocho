class Comment < ApplicationRecord
  validates :body, presence: true
  belongs_to :answer
  belongs_to :comment_author,
    foreign_key: :comment_author_id,
    class_name: :User
end
