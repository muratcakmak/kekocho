export const createQuestion = (question)=> {
  return $.ajax({
  	method:"post",
  	url:"api/questions",
  	data: { question }
  });
};

export const updateQuestion = (question)=> {
  return $.ajax({
  	method:"patch",
  	url:`api/questions/${question.id}`,
  	data: { question }
  });
};

export const fetchQuestion = (questionId) => {
  return $.ajax({
	method:"get",
	url:`api/questions/${questionId}`,
  });
};

export const deleteQuestion = (questionId) => {
  return $.ajax({
	method:"delete",
	url:`api/questions/${questionId}`,
  });
};



// { body: "What is the best question?", user_id: 6}

// $.ajax({
// 	method:"post",
// 	url:"api/questions",
// 	data: { question: { body: "What is the best question?", user_id: 6} }
// });
