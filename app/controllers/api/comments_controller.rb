class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save!
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
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @coment.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @comment = Comment.find(:id)
    if @comment.destroy!
      render :show
    else
      render json: @coment.errors.full_messages, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :comment_author_id, :answer_id)
  end
end
