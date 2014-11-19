class CodesController < ApplicationController
    def index
        render json: Code.all
    end

    def show
        render json: Code.find(params[:id])
    end

    def create
    	sleep 3
    	render json: Code.create(code)
    end


    private
		def code
			params[:code].permit(:name, :description, :body)
		end
end
