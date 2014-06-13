class Answer < ActiveRecord::Base
  belongs_to :options
  belongs_to :responders, class_name: 'User'
end
