export const createTopic = (question_topic)=> {
  return $.ajax({
    method: "post",
    url: "api/question_topics",
    data: { question_topic }
  });
};

export const requestTopicQuestions = (topicId) => {
  return $.ajax({
    method: "get",
    url: `api/topics/${topicId}`,
  });
};
