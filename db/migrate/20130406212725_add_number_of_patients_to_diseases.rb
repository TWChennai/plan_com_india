class AddNumberOfPatientsToDiseases < ActiveRecord::Migration
  def change
    add_column :diseases, :affect_count, :integer
  end
end
