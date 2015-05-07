class CodeSerializer < ApplicationSerializer
  attributes :id, :name, :body, :description, :created_at, :updated_at

  has_many :collections
end
