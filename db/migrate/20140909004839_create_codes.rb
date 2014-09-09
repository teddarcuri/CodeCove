class CreateCodes < ActiveRecord::Migration
  def change
    create_table :codes do |t|
      t.string :name
      t.text :body
      t.text :description

      t.timestamps
    end
  end
end
