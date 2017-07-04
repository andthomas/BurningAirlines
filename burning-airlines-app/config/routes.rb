Rails.application.routes.draw do

  root to: "flights#index"

  get 'session/new'

  get 'session/create'

  get 'session/edit'

  get 'session/update'

  get 'session/show'

  get 'session/index'

  get 'session/destroy'

  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
