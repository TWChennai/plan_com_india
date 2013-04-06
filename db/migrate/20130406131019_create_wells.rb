class CreateWells < ActiveRecord::Migration
  def change
    create_table :wells do |t|
      t.integer :latitude
      t.integer :longitude
      t.integer :water_level

      t.timestamps
    end
  end
end
