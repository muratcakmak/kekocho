export const createQuestion = (question)=> {
  return $.ajax({
  	method:"post",
  	url:"api/questions",
  	data: { question }
  });
};

export const fetchQuestion = (questionId) => {
  return $.ajax({
	method:"get",
	url:`api/questions/${questionId}`,
  });
};



// { body: "What is the best question?", user_id: 6}

// $.ajax({
// 	method:"post",
// 	url:"api/questions",
// 	data: { question: { body: "What is the best question?", user_id: 6} }
// });
