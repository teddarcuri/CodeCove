class LanguagesController < ApplicationController

    def index
    	# Get languages in alphabetical order
        render json: Language.order("name")
    end

    def show
        render json: Language.find(params[:id])
    end

end
