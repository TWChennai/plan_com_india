class Disease < ActiveRecord::Base
  attr_accessible :address, :latitude, :longitude, :name, :occurence_date, :patient_name, :pincode
  geocoded_by :address
  after_validation :geocode
end
