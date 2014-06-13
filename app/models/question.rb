class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :options
  has_many :answers, through: :options
  # Remember to create a migration!
end
