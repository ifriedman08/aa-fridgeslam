class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    if user_params[:password] != user_params[:password_confirmation]
      params[:user].delete('password_confirmation')
      @user = User.new(user_params)
      flash.now[:errors] = ['Passwords must match']
      render :new

    else
      params[:user].delete('password_confirmation')
      @user = User.new(user_params)

      if @user.save
        sign_in(@user)
        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    end
  end

  def user_params
    params.require(:user).permit(:email, :username, :password, :password_confirmation)
  end
end
