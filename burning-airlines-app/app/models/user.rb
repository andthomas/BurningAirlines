# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  admin           :boolean
#  username        :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_secure_password
  has_many :reservations
  has_many :flights, through: :reservations
end
