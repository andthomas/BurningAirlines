Rails.application.routes.draw do
  # root 'flights#app'
  # get '/app' => 'flights#app'
  # root to: "flights#index"

  root 'pages#app'
  get '/app' => 'pages#app'

  get     '/login' => 'session#new'       # login form
  post    '/login' => 'session#create'   # check credentials & attempt login (set session)
  delete  '/login' => 'session#destroy'  # logout (destroy session)

  resources :users
  resources :reservations
  resources :flights
  resources :airplanes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
