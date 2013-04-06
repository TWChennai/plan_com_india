class Disease < ActiveRecord::Base
  attr_accessible :address, :latitude, :longitude, :name, :occurence_date, :patient_name, :pincode, :affect_count
  geocoded_by :address
  after_validation :geocode
end
