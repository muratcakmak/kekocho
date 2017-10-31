class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(:id)

  end

  def edit
    @comment = Comment.find(:id)
  end

  def update
  end

  def destroy
  end

  def question_params
    params.require(:comment).permit(:body, :comment_author_id, :answer_id)
  end
end
