class Api::UsersController < ApplicationController

  def index
    @users = User.search(params[:user][:username])
    render 'api/users/search.html.erb'
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
