class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      # redirect_to '#/slams/' + like_params[:slam_id]
      render json: @like
    else
      # flash.now[:errors] = @like.errors.full_messages
      render json: @like.errors.full_messages
    end
  end

  def destroy

  end

  def like_params
    params.require(:like).permit(:user_id, :slam_id)
  end
end
