class RelationshipController < ApplicationController
    before_action :authenticate_user!


    def create
        follower = current_api_v1_user.follow(params[:user_id])
    end

    def destroy
        current_api_v1_user.unfollow(params[:user_id])
    end

    # フォローしている人一覧
    def follower
        follow_user = User.find(params[:user_id])
    end

    # フォローされている人一覧
    def followed
        followed_user = User.find(params[:user_id])
    end
end
