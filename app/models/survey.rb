class Survey < ActiveRecord::Base
  belongs_to :creator, class_name: 'User', foreign_key: :user_id
  has_many :questions
  has_many :options, through: :questions
  has_many :answers, through: :options

end
