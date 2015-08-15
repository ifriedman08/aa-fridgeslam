class Api::SlamsController < ApplicationController
  def new
  end

  def create
    @slam = Slam.new(slam_params)
    if @slam.save
      render :show
    else
      flash.now[:errors] = @slam.errors.full_messages
      redirect_to '#/slams/new-solo'
    end
  end

  def index
    case params[:order]
    when 'top'
      @slams = Slam.where(pending: false).joins(:likes).group('slams.id').order("COUNT(likes.id) DESC")
    when 'new'
      @slams = Slam.where(pending: false).order(created_at: :desc).limit(25).includes(:user, :likes)
    when 'pending'
      @slams = Slam.where(pending: true, user_id: current_user.id)
    else
      @slams = Slam.all
    end

    render :index
    # @top_slams = Slam.where(pending: false).order(created_at: :desc).limit(25).includes(:user, :likes)
    # @new_slams = Slam.where(pending: false).joins(:likes).group('slams.id').order("COUNT(likes.id) DESC")
    # @panding_slams = Slam.where(pending: true, user_id: current_user.id)
    #
    # render json: [@top_slams, @new_slams, @pending_slams]
  end

  def show
    @slam = SoloSlam.find(params[:id])
    render :show
  end

  def destroy
    @slam = SoloSlam.find(params[:id])
    @slam.destroy
    render :index
  end

  def slam_params
    params.require(:slam).permit(:title, :body)
  end
end
