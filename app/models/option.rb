class Option < ActiveRecord::Base
  has_many :answers
  belongs_to :question
  has_many :responders, class_name: 'User', foreign_key: :user_id

  validates :name, format: string
end
