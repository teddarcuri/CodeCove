class CodesCollections < ActiveRecord::Migration
  def change
  	create_table :codes_collections do |t|
  		t.belongs_to :code, :collection
  		t.timestamps
  	end
  end
end
