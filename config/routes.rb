Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions
    resources :answers
    resources :comments
    resources :topics, only: [:show, :index]
    resources :question_topics, only: [:create, :destroy]
  end

  delete '/api/question_topics/:topic_id/:question_id', to: 'api/question_topics#destroy'


  namespace :api do
      get 'search/:query', to: 'search#index'
  end
end
