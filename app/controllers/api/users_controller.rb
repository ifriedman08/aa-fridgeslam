class Api::UsersController < ApplicationController

  def index

    if params[:pending_invites]
      @users = current_user.pending_invited_by
      render :index
    end

    @users = User.all unless params[:user]
    if params[:user]
      @users = User.search(params[:user][:username]) if params[:user]
      render 'api/users/search.html.erb'
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
