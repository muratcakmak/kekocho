# Under construction
json.array! @questions do |question|
  json.id question.id
  json.body question.body
  json.questionAuthorId question.question_author_id
  json.authorIds json.array! question.answers, :id
end
