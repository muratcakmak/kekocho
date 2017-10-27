# Under construction
json.questions do
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body
      json.questionAuthorId question.question_author_id
      json.answerIds do
        json.array! question.answers, :id
      end
      json.firstAnswer question.answers.first
    end
  end
end

json.answers do
  @questions.each do |question|
    question.answers.each do |answer|
      json.set! answer.id do
        json.extract! question, :id, :body
        json.answerAuthorId answer.answer_author_id
        json.questionId answer.question_id
        json.commentsArray do
          json.array! answer.comments, :id
        end
      end
    end
  end
end

json.comments do
  @questions.each do |question|
    question.answers.each do |answer|
      answer.comments do |comment|

        json.set! comment.id do
          json.extract! comment, :id, :body
          json.commentAuthorId comment.comment_author_id
          json.answerId comment.answer_id
        end
      end
    end
  end
end
