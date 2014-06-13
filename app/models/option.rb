class Option < ActiveRecord::Base
  has_many :answers
  belongs_to :questions
  has_many :responders, class_name: 'User', foreign_key: :user_id
end
