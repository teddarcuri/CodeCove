class CollectionsController < ApplicationController

    def index
        render json: Collection.all
    end

    def show
        render json: Collection.find(params[:id]).codes
    end

end
