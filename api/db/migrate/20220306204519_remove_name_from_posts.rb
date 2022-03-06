class RemoveNameFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :name
  end
end
