get '/survey/new' do
  redirect '/' unless logged_in?
  erb :new
end

post '/survey' do
  count = 1
  survey = Survey.create(name: params[:title], creator: current_user)
  p params
  p params[:question]
  params[:question].each_with_index do |question, index|
    question = Question.create(name: question, survey: survey)
    vari = "options#{count}"
    params[vari].each do |option|
      Option.create(name: option, question: question)
    end
    count += 1
  end
  redirect '/survey'
end

get '/survey' do
  redirect '/' unless logged_in?
  @surveys = Survey.all
  erb :list
end

get '/survey/:id' do
  redirect '/' unless logged_in?
  @survey = Survey.find(params[:id])
  erb :answer
end

post '/survey/:id' do
  require 'json'
  answers = JSON.parse(params[:ans])
  answers.each do |question,option|
    Answer.create(option: Option.find(option.to_i), responder: User.find(session[:user_id]))
  end
  p '****************************** post /survey/:id'
  200
end

post '/survey/:id/stats' do
  @questions = Question.where(survey: [:params[:survey.id]])
end


post '/survey/:id/stats' do
  @survey = Survey.find(params[:id])
  @stats = @survey.questions.all.first.options.group(:answer).count
end