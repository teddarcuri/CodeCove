class LanguagesController < ApplicationController

    def index
    	# Get languages in alphabetical order
        render json: Language.order("name")
    end

    def show
        render json: Language.find(params[:id])
    end

    private
	def language
		params[:language].permit(:name, {:code_ids => []})
	end

end
