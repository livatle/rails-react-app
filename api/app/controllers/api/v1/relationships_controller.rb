class Api::V1::RelationshipsController < ApplicationController
    before_action :authenticate_api_v1_user!
    def index
        user = User.find(params[:id])
        if current_api_v1_user
            is_following = current_api_v1_user.following?(user)
            render json: is_following
        end
    end

    def create
        follow = current_api_v1_user.follow(params[:id])
        render json: follow
    end

    def destroy
        current_api_v1_user.unfollow(params[:id])
    end
end
