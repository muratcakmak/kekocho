export const createTopic = (question_topic)=> {
  return $.ajax({
    method: "post",
    url: "api/question_topics",
    data: { question_topic }
  });
};

export const deleteTopic = (topicId)=> {
  return $.ajax({
    method: "delete",
    url: `api/question_topics/${topicId}`,
  });
};

export const requestTopicQuestions = (topicId) => {
  return $.ajax({
    method: "get",
    url: `api/topics/${topicId}`,
  });
};
