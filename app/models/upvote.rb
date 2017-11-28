class Upvote < ApplicationRecord
  validates :answer, :user, presence: true
  validates :user_id, uniqueness: { scope: :answer_id }

  belongs_to :answer
  belongs_to :user
end
