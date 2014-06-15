get '/survey/new' do
  redirect '/' unless logged_in?
  erb :new
end

post '/survey' do
  survey = Survey.create(name: params[:title], user_id: session[:user_id])
  params[:questions].each do |question|
    question = Question.create(name: question[:name], survey_id: survey.id )
    index = params[:questions].index(question)
    params[:options][index].each do |option|
      Option.create(name: option[:name], question_id: question.id)
    end
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
    Answer.create(option: Option.find(v.to_i), responder: User.find(session[:user_id]))
  end
end

post '/survey/:id/stats' do
  @questions = Question.where(survey: [:params[:survey.id]])
end
