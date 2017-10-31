json.extract! @answer, :id, :body
json.answerAuthorId @answer.answer_author_id
json.questionId @answer.question_id
json.body @answer.body
json.authorName @answer.answer_author.first_name + " " + @answer.answer_author.last_name

# json.questions do
#   json.set! @answer.question.id do
#     json.answers do
#       json.set! @answer.id do
#         json.extract! @answer, :id, :body
#         json.answerAuthorId @answer.answer_author_id
#         json.questionId @answer.question_id
#         json.body @answer.body
#         json.authorName @answer.answer_author.first_name + " " + @answer.answer_author.last_name
#       end
#     end
#   end
# end

# answers: state.questions[match].answerIds.map(id => state.answers[id])
# {
#   questions: {
#     1: {
#       answerIds: [1]
#     }
#     2: {
#       answerIds: []
#     }
#     3: {
#       answerIds: [2,3]
#     }
#   },
#   answers: {
#     1: {
#       questionId: 1
#     }
#     2: {
#       questionId: 3
#     }
#     3: {
#       questionId: 3
#     },
#   }
# }
#
# {
#   id: 42,
#   questionId: 3
# }
