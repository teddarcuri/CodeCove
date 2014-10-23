class CodesLanguages < ActiveRecord::Migration
  def change
  	create_table :codes_languages do |t|
  		t.belongs_to :code, :language
  		t.timestamps
  	end
  end
end
