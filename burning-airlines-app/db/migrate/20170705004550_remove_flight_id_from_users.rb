class RemoveFlightIdFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :flight_id, :integer
  end
end
