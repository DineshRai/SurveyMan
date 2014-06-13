require 'faker'

# 5.times do
#   User.create(email: Faker::Internet.email)
# end

5.times do
  Survey.create(name: Faker::Company.catch_phrase, user_id: User.all.sample.id)
end
