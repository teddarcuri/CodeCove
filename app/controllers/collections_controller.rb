class CollectionsController < ApplicationController

    def index
        render json: Collection.all
    end

    def show
        render json: Collection.find(params[:id])
    end

    def create
    	render json: Collection.create(collection)
    end

    def update
        render json: Collection.find(params[:id]).tap { |s| s.update_attributes(collection) }
    end

    private
	def collection
		params[:collection].permit(:name, :description, {:code_ids => []})
	end

end
