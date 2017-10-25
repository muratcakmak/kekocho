class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    debugger
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    # TODO: first_name and last_name checking
    params.require(:user).permit(:password, :email, :first_name, :last_name)
  end
end
