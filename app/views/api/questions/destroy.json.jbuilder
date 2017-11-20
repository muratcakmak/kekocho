# json.partial! 'questions/question', question: @question
json.extract! @question, :id, :body, :question_author
