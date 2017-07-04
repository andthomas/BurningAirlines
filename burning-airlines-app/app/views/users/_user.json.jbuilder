json.extract! user, :id, :flight_id, :reservation_id, :admin, :username, :password_digest, :created_at, :updated_at
json.url user_url(user, format: :json)
