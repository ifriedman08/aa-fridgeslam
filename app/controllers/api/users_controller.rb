class Api::UsersController < ApplicationController

  def index
    @users = User.all
    
  end

  def show

  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
