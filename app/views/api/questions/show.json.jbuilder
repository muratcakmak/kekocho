json.extract! @question, :id, :body
json.authorName @question.question_author.first_name + " " + @question.question_author.last_name
json.answers do
  @question.answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body
      json.answerAuthorId answer.answer_author_id
      json.questionId answer.question_id
      json.body answer.body
      json.authorName answer.answer_author.first_name + " " + answer.answer_author.last_name
      # json.commentsArray do
      #   json.array! answer.comments, :id
      # end
    end
  end
end
