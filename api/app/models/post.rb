class Post < ApplicationRecord
    belongs_to :user
    has_many :favorites, dependent: :destroy

    def favorited_by?(current_api_v1_user)
        favorites.where(user_id: current_api_v1_user.id).exists?
    end
end
