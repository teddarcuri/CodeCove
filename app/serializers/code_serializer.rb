class CodeSerializer < ApplicationSerializer
  embed :ids, include: true
  attributes :id, :name, :body, :description, :created_at, :updated_at

  has_many :collections
end
