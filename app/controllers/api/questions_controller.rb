class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def new
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    debugger
    @question = Question.find(params[:id])
  end

  def edit
  end

  def update
  end

  def destroy
  end
  def question_params
    params.require(:question).permit(:body, :question_author_id)
  end
end
