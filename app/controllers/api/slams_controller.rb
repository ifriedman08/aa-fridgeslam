class Api::SlamsController < ApplicationController
  def new
    @slam = Slam.new()
    render :show
  end

  def create
    @slam = Slam.new
    @slam.user_id = current_user.id
    @slam.title = params[:title]
    @slam.body = params[:body]
    @slam.pending = params[:pending]
    @slam.mode = params[:mode]
    @slam.current_slammer_id = params[:current_slammer_id]
    @slam.slammer_ids = params[:slammer_ids]
    @slam.ord = 0

    if @slam.mode == 'solo'
      if @slam.save
        render :show
      else
        render json: @slam.errors.full_messages, status: 422
        render :show
      end
    else
      @slam.slammer_ids = @slam.slammer_ids.rotate
      if @slam.save
        render :show
      else
        render json: @slam.errors.full_messages, status: 422
        render :show
      end
    end
  end

  def update
    @slam = Slam.find(params[:id])
    if @slam.update(slam_params)
      @slam.member_ids = @slam.member_ids.rotate if @slam.mode == 'group'
      render :show
    else
      render json: @slam.errors.full_messages, status: 422
      render :show
    end
  end

  def index
    case params[:order]
    when 'top'
      @slams = Slam.where(pending: false).joins("LEFT OUTER JOIN likes ON slams.id = likes.slam_id").includes(:user, :likes).group('slams.id').order("COUNT(likes.id) DESC").limit(25)
    when 'new'
      @slams = Slam.where(pending: false).order(updated_at: :desc).limit(25).includes(:user, :likes)
    when 'pending'
      @slams = Slam.where("pending AND slammer_ids[ord + 1] = ?", current_user.id).includes(:likes, :user).order(created_at: :desc) +
               Slam.where(pending: true).joins(:slam_memberships).where(slam_memberships: {user_id: current_user.id}).includes(:likes, :user).order(created_at: :desc)
    when 'completed'
      @slams = Slam.where(pending: false, user_id: current_user.id).includes(:likes, :user).order(created_at: :desc) +
               Slam.where(pending: false).joins(:slam_memberships).where(slam_memberships: {user_id: current_user.id}).includes(:likes, :user).order(created_at: :desc)
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
