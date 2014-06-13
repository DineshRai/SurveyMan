class Answer < ActiveRecord::Base
  belongs_to :option
  belongs_to :responder, class_name: 'User', foreign_key: :user_id
end
