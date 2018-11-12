export const createAnswer = answer => $.ajax({
  method: 'post',
  url: 'api/answers',
  data: { answer },
});

export const updateAnswer = answer => $.ajax({
  method: 'patch',
  url: `api/answers/${answer.id}`,
  data: { answer },
});

export const deleteAnswer = answerId => $.ajax({
  method: 'delete',
  url: `api/answers/${answerId}`,
});

export const requestAllAnswers = () => $.ajax({
  method: 'get',
  url: 'api/answers',
});
