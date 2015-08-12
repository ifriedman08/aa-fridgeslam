class Api::SlamsController < ApplicationController
  def new
  end

  def create

  end

  def index
    @slams = (SoloSlam.all + GroupSlam.all).reject{|slam| slam.pending}
    render :index
  end

  def show
    @slam = SoloSlam.find(params[:id])
    render "slams/show"
  end

  def destroy
    @slam = SoloSlam.find(params[:id])
    @slam.destroy
    render "slams/index"
  end
end
