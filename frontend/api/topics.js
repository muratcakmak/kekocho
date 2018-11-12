export const createTopic = question_topic => $.ajax({
  method: 'post',
  url: 'api/question_topics',
  data: { question_topic },
});

export const deleteTopic = ({ topicId, questionId }) => $.ajax({
  method: 'delete',
  url: `api/question_topics/${topicId}/${questionId}`,
});

export const requestTopicQuestions = topicId => $.ajax({
  method: 'get',
  url: `api/topics/${topicId}`,
});
