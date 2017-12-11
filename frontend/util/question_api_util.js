export const createQuestion = question => $.ajax({
  method: 'post',
  url: 'api/questions',
  data: { question },
});

export const updateQuestion = question => $.ajax({
  method: 'patch',
  url: `api/questions/${question.id}`,
  data: { question },
});

export const fetchQuestion = questionId => $.ajax({
  method: 'get',
  url: `api/questions/${questionId}`,
});

export const deleteQuestion = questionId => $.ajax({
  method: 'delete',
  url: `api/questions/${questionId}`,
});

