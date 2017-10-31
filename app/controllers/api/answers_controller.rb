class Api::AnswersController < ApplicationController
  def index
    @answers = Answer.all
  end

  def new
  end

  def create
    @answer = Answer.new(answer_params)
    # Check user already answered
    #return json :error if params[:answer][:answer_author_id]
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
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    if @answer.destroy
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def answer_params
    params.require(:answer).permit(:body, :answer_author_id, :question_id)
  end
end
