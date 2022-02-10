class RelationshipController < ApplicationController
    before_action :authenticate_user!
    def create
        current_api_v1_user.follow(params[:user_id])
    end

    def destroy
        current_api_v1_user.unfollow(params[:user_id])
    end
end
