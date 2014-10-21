class CollectionSerializer < ApplicationSerializer
  attributes :id, :name, :description

  has_many :codes
end
