#users_controller.rb
class Api::V1::UsersController < ApplicationController
    def show
      render json: Post.where(user_id: params[:id])
    end

    # フォローしている人一覧
    def following
      user = User.find(params[:id])
      render json: user.followings
    end

    # フォローされている人一覧
    def follower
      user = User.find(params[:id])
      render json: user.followers
    end
end