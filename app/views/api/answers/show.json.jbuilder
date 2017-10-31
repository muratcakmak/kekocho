json.answers do
  json.extract! @answer, :id, :body
end

json.questions do
  json.set! @answer.question.id do
    json.answers do
      json.set! @answer.id do
        json.extract! @answer, :id, :body
        json.answerAuthorId @answer.answer_author_id
        json.questionId @answer.question_id
        json.body @answer.body
        json.authorName @answer.answer_author.first_name + " " + @answer.answer_author.last_name
      end
    end
  end
end
