class Favorite < ApplicationRecord
    belongs_to :user
    balongs_to :post
end
