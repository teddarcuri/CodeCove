class Code < ActiveRecord::Base
	has_and_belongs_to_many :collections
	has_and_belongs_to_many :languages

end
