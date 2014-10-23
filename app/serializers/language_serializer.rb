class LanguageSerializer < ApplicationSerializer
  attributes :id, :name

  has_many :codes
end
