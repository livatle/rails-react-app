Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :posts
      resources :users
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