class RemoveAirplaneIdFromFlights < ActiveRecord::Migration[5.0]
  def change
    remove_column :flights, :airplane_id, :integer
  end
end
