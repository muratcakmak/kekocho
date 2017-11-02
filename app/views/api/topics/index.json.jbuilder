# json.array! @topics, :id, :name
json.topics do
  json.array! @topics do |topic|
    json.extract! topic, :id, :name
    json.questionIds topic.questions.pluck(:id)
  end
end
