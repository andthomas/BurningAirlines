class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.integer :flight_no
      t.string :origin
      t.string :destination
      t.date :date
      t.integer :airplane_id

      t.timestamps
    end
  end
end
