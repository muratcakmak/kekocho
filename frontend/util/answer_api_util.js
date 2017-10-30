export const createAnswer = (answer)=> {
  return $.ajax({
    method:"post",
    url: "api/answers",
    data: {answer}
  });
};

export const requestAllAnswers = ()=> {
  return $.ajax({
    method:"get",
    url: "api/answers",
  });
};
