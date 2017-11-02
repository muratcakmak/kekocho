
json.questionTopic do
  json.extract! @question_topic, :id
  json.questionId  @question_topic.question_id
  json.topicId  @question_topic.topic_id
end
