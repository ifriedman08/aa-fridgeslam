class Api::SlamsController < ApplicationController
  def new
  end

  def create

  end

  def index

    @new_slams = Slam.where(pending: false).order(created_at: :desc).limit(25).includes(:user, :likes)
    @top_slams = Slam.where(pending: false).joins(:likes).group('slams.id').order("COUNT(likes.id) DESC")
    @pending_slams = Slam.where(pending: true, user_id: current_user.id)

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
