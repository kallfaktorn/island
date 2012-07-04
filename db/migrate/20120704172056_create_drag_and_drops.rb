class CreateDragAndDrops < ActiveRecord::Migration
  def change
    create_table :drag_and_drops do |t|

      t.timestamps
    end
  end
end
