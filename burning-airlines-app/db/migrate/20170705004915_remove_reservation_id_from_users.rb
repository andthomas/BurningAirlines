class RemoveReservationIdFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :reservation_id, :integer
  end
end
