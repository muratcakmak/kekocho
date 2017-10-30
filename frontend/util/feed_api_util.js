export const requestFeedData = () => (
  $.ajax({
  method: "get",
  url: "api/questions"
  })
);
