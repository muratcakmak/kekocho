# json.topic do
  json.extract! @upvote, :id
  json.questionId  @upvote.question_id
  json.userId  @upvote.user_id
# end
