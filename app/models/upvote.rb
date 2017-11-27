class Upvote < ApplicationRecord
  validates :question, :user, presence: true
  validates :user_id, uniqueness: { scope: :question_id }

  belongs_to :question
  belongs_to :user
end
