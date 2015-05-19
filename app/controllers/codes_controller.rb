class CodesController < ApplicationController
    def index
        render json: Code.all
    end

    def show
        render json: Code.find(params[:id])
    end

    def create
    	render json: Code.create(code)
    end

    def update
        render json: Code.find(params[:id]).tap { |s| s.update_attributes(code) }
    end

     def destroy
        render json: Code.find(params[:id]).destroy
    end

    private
	def code
		params[:code].permit(:name, :description, :body, :created_at, :updated_at, {:collection_ids => []}, {:language_ids => []})
	end
end
