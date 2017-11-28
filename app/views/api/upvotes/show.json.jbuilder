# json.topic do
  json.extract! @upvote, :id
  json.answerId  @upvote.answer_id
  json.userId  @upvote.user_id
  json.upvotes @upvote.answer.upvotes.count
# end
