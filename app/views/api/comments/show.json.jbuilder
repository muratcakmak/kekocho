json.extract! @comment, :id, :body
json.commentAuthorId @comment.comment_author_id
json.answerId @comment.answer_id
json.body @comment.body
json.authorName @comment.comment_author.first_name + " " + @comment.comment_author.last_name
