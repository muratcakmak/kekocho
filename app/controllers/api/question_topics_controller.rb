class Api::QuestionTopicsController < ApplicationController
  def index
    @question_topics = QuestionTopic.all
  end

  def create
    question = Question.find(params[:question_topic][:question_id])
    topic_name = params[:question_topic][:topic_name]
# To prevent duplication of the topic
    topic = Topic.find_or_create_by(name: topic_name)
    @question_topic = QuestionTopic.new()
    @question_topic.question = question
    @question_topic.topic = topic

    if @question_topic.save
      render :show
    else
      render json: @question_topic.errors.full_messages, status: 422
    end
  end

  # TODO: Destroy


  def question_topic_params
    params.require(:question_topic).permit(:question_id, :topic_name)
  end
end
