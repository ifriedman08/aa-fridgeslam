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
      render :new
    end
  end

  def update
    @slam = Slam.find(params[:id])
    if @slam.update(slam_params)
      render :index
    else
      flash.now[:errors] = @slam.errors.full_messages
      render :new
    end
  end

  def index
    case params[:order]
    when 'top'
      # @slams = Slam.where(pending: false).joins(:likes).group('slams.id').order("COUNT(likes.id) DESC")
      @slams = Slam.where(pending: false).joins("LEFT OUTER JOIN likes ON slams.id = likes.slam_id").includes(:user, :likes).group('slams.id').order("COUNT(likes.id) DESC").limit(25)
    when 'new'
      @slams = Slam.where(pending: false).order(created_at: :desc).limit(25).includes(:user, :likes)
    when 'pending'
      @slams = Slam.where(pending: true, user_id: current_user.id).includes(:likes, :user).order(created_at: :desc)
    when 'completed'
      @slams = Slam.where(pending: false, user_id: current_user.id).includes(:likes, :user).order(created_at: :desc)
    else
      @slams = Slam.includes(:likes, :user).last(25)
    end

    render :index
  end

  def show
    @slam = Slam.find(params[:id])
    render :show
  end

  def destroy
    @slam = Slam.find(params[:id])
    @slam.destroy
    render :index
  end

  def slam_params
    params.require(:slam).permit(:title, { :body => [] }, :mode, :pending)
  end
end
