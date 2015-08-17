class Api::SlamsController < ApplicationController
  def new
  end

  def create
    @slam = Slam.new
    @slam.user_id = current_user.id
    @slam.title = params[:title]
    @slam.body = params[:body]
    @slam.pending = params[:pending]
    @slam.mode = params[:mode]

    if @slam.save
      render :index
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
    params.require(:slam).permit(:title, :body, :mode, :pending)
  end
end
