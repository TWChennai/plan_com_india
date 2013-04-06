class CreateDiseases < ActiveRecord::Migration
  def change
    create_table :diseases do |t|
      t.date :occurence_date
      t.string :name
      t.decimal :latitude
      t.decimal :longitude
      t.string :pincode
      t.string :patient_name
      t.string :address

      t.timestamps
    end
  end
end
