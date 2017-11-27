class Api::QuestionsController < ApplicationController
  def index
    @questions = Question.order('created_at DESC').paginate(:page => params[:page], per_page: 5).includes(:answers)
    @topics = Topic.limit(5)
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
    @question = Question.find(params[:id])
  end

  def edit
  end

  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def question_params
    params.require(:question).permit(:body, :question_author_id, tag_ids: [])
  end
end
