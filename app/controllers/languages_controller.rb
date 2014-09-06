class LanguagesController < ApplicationController

    def index
        render json: Language.all
    end

    def show
        render json: Language.find(params[:id])
    end

end
