json.topic do
  json.extract! @topic, :id, :name
  json.questionIds @topic.questions.pluck(:id)
end
