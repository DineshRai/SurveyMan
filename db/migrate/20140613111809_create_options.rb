class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :name
      t.belongs_to :question

      t.timestamps
    end
  end
end
