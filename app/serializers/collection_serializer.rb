class CollectionSerializer < ApplicationSerializer
  embed :ids, include: true	
  attributes :id, :name, :description

  has_many :codes
end
