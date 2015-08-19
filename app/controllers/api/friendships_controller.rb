class Api::FriendshipsController < ApplicationController

  def index
    @friendships = Friendship.where("friend_id = :id or friendable_id = :id", { id: current_user.id})
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      render :index
    else
      flash.now[:errors] = @friendship.errors.full_messages
    end
  end

  def update
    @friendship = Friendship.find(params[:id])

    if @friendship.update(friendship_params)
      render :index
    else
      flash.now[:errors] = @friendship.errors.full_messages
    end
  end

  def destroy
    @friendship = Friendship.find(params[:id])
    @friendship.destroy
    render :index
  end

  def friendship_params
    params.require(:friendship).permit(:id, :pending)
  end
end
