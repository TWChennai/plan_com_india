ActiveAdmin.register Disease do
  
  form do |f|
    f.inputs "Enter Details" do
      f.input :occurence_date, :label => "Affected Date"
      f.input :address, :label => "Location"
      f.input :name, :label => "Diseases Name"
      f.input :pincode
      f.input :affect_count, :label => "Affected No. Of Patients"
      f.input :patient_name, :label => "Patient Name (If applicable)"
    end
    f.actions
  end
  
end
