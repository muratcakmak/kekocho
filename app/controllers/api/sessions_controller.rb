class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      sign_in(@user)
      render '/api/users/show'
    else
      render json: ["Invalid email/password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if current_user
      sign_out
      render '/api/users/show'
    else
      render status: 404
    end
  end
end
