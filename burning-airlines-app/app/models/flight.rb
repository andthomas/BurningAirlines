# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  flight_no   :integer
#  origin      :string
#  destination :string
#  date        :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  airplane_id :integer
#

class Flight < ApplicationRecord
  belongs_to :airplane, optional: true
  has_many :reservations
  has_many :users, through: :reservations
end
