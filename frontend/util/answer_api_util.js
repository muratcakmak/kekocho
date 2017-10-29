export const createAnswer = (answer)=> {
  return $.ajax({
    method:"post",
    url: "api/answers",
    data: {answer}
  });
};
