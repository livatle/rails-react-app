class Api::V1::PostsController < ApplicationController
    before_action :authenticate_api_v1_user!, only: [:create, :update, :destroy]
    def index
        posts = User.joins(:posts).select('posts.id, user_id, content, users.name AS user').order("created_at DESC")
        render json: posts
    end

    def show
        post = Post.find(params[:id])
        render json: {post: post, is_favorite: post.favorited_by?(current_api_v1_user)}
    end

    def create
        post = Post.create(post_params)
        if post.save
            render json: post
        else
            render json: post.errors, status: 422
        end
    end

    def update
        post = Post.find(params[:id])
        if current_api_v1_user.id == post.user_id
            post.update(post_params)
            render json: post
        else
            render json: { message: 'can not update data' }, status: 422
        end
    end

    def destroy
        post = Post.find(params[:id])
        if current_api_v1_user.id == post.user_id
            post.destroy
            render json: post
        else
            render json: { message: 'can not delete data' }, status: 422
        end
    end

    private
        def post_params
            params.require(:post).permit(:name, :content).merge(user_id: current_api_v1_user.id)
        end
end
