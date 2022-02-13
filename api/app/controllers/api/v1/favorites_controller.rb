class Api::V1::FavoritesController < ApplicationController
    def create
        favorite = current_api_v1_user.favorites.build(post_id: params[:post_id])
        render json: favorite
    end

    def destroy
        favorite = Favorite.find_by(user_id: current_api_v1_user.id, post_id: params[:post_id])
        favorite.destroy
    end
end
