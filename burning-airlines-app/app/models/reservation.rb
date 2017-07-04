# == Schema Information
#
# Table name: reservations
#
#  id          :integer          not null, primary key
#  flight_id   :integer
#  user_id     :integer
#  seat_row    :integer
#  seat_column :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Reservation < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :flight, optional: true
end
