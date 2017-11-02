Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions
    resources :answers
    resources :comments
    resources :topics, only: [:show, :index]
  end

  namespace :api do
      get 'search/:query', to: 'search#index'
  end
end
