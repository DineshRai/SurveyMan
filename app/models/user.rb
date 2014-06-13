class User < ActiveRecord::Base
  has_many :surveys
  has_many :questions, through: :surveys
  has_many :options, through: :questions
  has_many :answers
  # Remember to create a migration!
end
