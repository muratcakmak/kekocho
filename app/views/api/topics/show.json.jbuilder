json.topic do
  json.extract! @topic, :id, :name
  json.questionIds @topic.questions.pluck(:id)
end

json.questions do
  @topic.questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body
      json.authorName question.question_author.first_name + " " + question.question_author.last_name
      json.answerIds question.answers.pluck(:id)
      json.topicIds question.topics.pluck(:id)
      json.date question.created_at.strftime("%d %b %Y")
    end
  end
end
