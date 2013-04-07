class HomeController < ApplicationController
	def map
	  diseases = Disease.all
	  @final_json = {}
	  diseases.each do |dis|	    	    
	    if @final_json[dis.occurence_date]
	      @final_json[dis.occurence_date] << [dis.latitude, dis.longitude, dis.affect_count]
	    else
	      @final_json[dis.occurence_date] = [[dis.latitude, dis.longitude, dis.affect_count]]
	    end  
    end
    @final_json
	end

	def about
	end
end