class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages
    end
  end

  def destroy

  end

  def like_params
    params.require(:like).permit(:user_id, :slam_id)
  end
end
