#users_controller.rb
class Api::V1::UsersController < ApplicationController
    def show
      posts = Post.where(user_id: params[:id]).order("created_at DESC")
      render json: {
        posts: posts,
        user: user,
        is_following: user.following?(current_api_v1_user)
      }
    end

    # フォローしている人一覧
    def following
      render json: user.followings
    end

    # フォローされている人一覧
    def follower
      render json: user.followers
    end

    #いいねしている投稿一覧
    def favorite_posts
      render json: user.favorite_posts
    end

    private
      def user
        user = User.find(params[:id])
      end
end