require 'faker'


10.times do
  User.create(email: Faker::Internet.email, password: "123456")
end

Survey.create(name: Faker::Company.catch_phrase, creator: User.all.sample)

question_array = []
10.times do
  question = Question.create(survey: Survey.all.sample, name: Faker::Company.catch_phrase)
  question_array << question
end

def create_option(question)
    option = Option.create(question: question, name: Faker::Company.catch_phrase)
end

question_array.each do |x|
  5.times do
    x.options << create_option(x)
  end
end

users = User.all
survey = Survey.first
users.each do |user|
  survey.questions.each do |question|
    option = question.options.sample
    Answer.create(option: option, responder: user)
  end
end
