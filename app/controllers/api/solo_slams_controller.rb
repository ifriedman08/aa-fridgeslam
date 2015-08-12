class Api::SoloSlamsController < ApplicationController
  def new

  end

  def create

  end

  def index
    @slams = (SoloSlam.all + GroupSlam.all).reject{|slam| slam.pending}
    render "slams/index"
  end

  def show

  end

  def update

  end

  def destroy

  end
end
