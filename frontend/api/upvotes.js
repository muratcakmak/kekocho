export const createUpvote = upvote => $.ajax({
  method: 'post',
  url: 'api/upvotes',
  data: { upvote },
});

export const deleteUpvote = ({ userId, answerId }) => $.ajax({
  method: 'delete',
  url: `api/upvotes/${userId}/${answerId}`,
});
