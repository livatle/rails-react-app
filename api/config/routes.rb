Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :posts do
        resource :favorites, only: [:create, :destroy]
      end
      resources :users do
        member do
          get :following, :follower, :favorite_posts
        end
      end
      resources :relationships, only: [:create, :destroy]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
    }

      namespace :auth do
        resources :sessions, only: [:index]
      end
    end
  end
end