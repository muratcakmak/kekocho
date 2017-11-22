export const requestFeedData = () => (
  $.ajax({
  method: "get",
  url: "api/questions"
  })
);

export const requestFeedDataWithPage = (page) => (
  $.ajax({
  method: "get",
  url: `api/questions?page=${page}`
  })
);
