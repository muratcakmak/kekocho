json.answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body
      json.answerAuthorId answer.answer_author_id
      json.questionId answer.question_id
      json.commentIds answer.comments.pluck(:id)
    end
  end
end
