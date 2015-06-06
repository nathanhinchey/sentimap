Rails.application.routes.draw do
  root to: "map#home"
  resources :requests
end
