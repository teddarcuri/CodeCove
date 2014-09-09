class CodesController < ApplicationController
    def index
        render json: Code.all
    end

    def show
        render json: Code.find(params[:id])
    end
end
