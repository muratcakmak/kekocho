class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
  end

  def new
  end

  def create
    @answer = Answer.new(answer_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def answer_params
    params.require(:answer).permit(:body, :answer_author_id, :question_id)
  end
end
