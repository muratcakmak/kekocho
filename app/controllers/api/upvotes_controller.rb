class Api::UpvotesController < ApplicationController
  def create
    debugger
    question = Question.find(params[:upvote][:question_id])
    user = User.find(params[:upvote][:user_id])
# To prevent duplication of the topic
    @upvote = Upvote.new()
    @upvote.question = question
    @upvote.user = user

    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    debugger
    @upvote = Upvote.find_by(user_id: params[:user_id], question_id: params[:question_id])
    debugger
    if @upvote.destroy
      render :show
    else
      render json: @upvote.full_messages, status: 422
    end
  end

  def show
  end
end
