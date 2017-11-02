json.topic do
  json.extract! @topic, :id, :name
  json.questionIds @topic.questions.pluck(:id)
end

json.questions do
  @topic.questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :body, :created_at, :updated_at
      json.authorName question.question_author.first_name + " " + question.question_author.last_name
    end
  end
end
