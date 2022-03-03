#users_controller.rb
class Api::V1::UsersController < ApplicationController
    def show
      user = User.find(params[:id])
      posts = Post.where(user_id: params[:id])
      render json: {
        posts: posts,
        user: user,
        is_following: user.following?(current_api_v1_user)
      }
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