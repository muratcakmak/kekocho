class Api::UpvotesController < ApplicationController
  def create
    answer = Answer.find(params[:upvote][:answer_id])
    user = User.find(params[:upvote][:user_id])
    @upvote = Upvote.new()
    @upvote.answer = answer
    @upvote.user = user

    if @upvote.save
      render :show
    else
      render json: @upvote.errors.full_messages, status: 422
    end
  end

  def destroy
    @upvote = Upvote.find_by(user_id: params[:user_id], answer_id: params[:answer_id])
    if @upvote.destroy
      render :show
    else
      render json: @upvote.full_messages, status: 422
    end
  end

  def show
  end
end
