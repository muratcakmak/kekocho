export const createUpvote = (upvote)=> {
  return $.ajax({
    method:"post",
  	url:"api/upvotes",
    data: { upvote }
  });
};

export const deleteUpvote = ({ userId, answerId })=> {
  return $.ajax({
    method: "delete",
    url: `api/upvotes/${userId}/${answerId}`,
  });
};
