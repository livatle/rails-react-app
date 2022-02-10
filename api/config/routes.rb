Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :posts
      resources :users do
        member do
          get :following, :followers
        end
      end
      resources :relationships, only: [:create, :destroy]

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/resistrations'
    }

      namespace :auth do
        resources :sessions, only: [:index]
      end
    end
  end
end