class DiseaseController < ApplicationController
  respond_to :json

  def create
    params[:occurence_date] = Time.at(params[:occurence_date].to_i/1000) if params[:occurence_date].present?
    disease = Disease.create! params.slice(:address, :latitude, :longitude, :name, :occurence_date, :patient_name, :pincode, :affect_count)
    render :json => disease
  end
end
