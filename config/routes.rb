Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :slams, only: [:new, :create, :destroy, :index, :edit, :update, :show]
    resources :likes, only: [:create, :destroy]
    resources :dictionary, only: [:index]
    resources :users, only: [:index, :show]
    resources :friendships, only: [:create, :update, :destroy, :index]
  end

  resources :users, only: [:new, :create] do
    resources :dictionary, only: [:index]
  end
  resource :session, only: [:new, :create, :destroy] do
    resources :dictionary, only: [:index]
  end
end
