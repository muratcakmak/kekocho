Rails.application.routes.draw do

  namespace :api do
    get 'topics/index'
  end

  namespace :api do
    get 'topics/show'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :questions
    resources :topics, only: [:show, :index]
  end

end
