get '/' do
  erb :new
end

post '/login' do
  @email = params[:email]
  @password = params[:password]
  if user
    session[:user_id] = user.id
    @surveys = Survey.all
    redirect '/sruvey/list'
  end
end


post '/signup' do
  @user = User.new (email: params[:email], password: params[:password])
  if @user.save
    session[:user_id] = @user.id
    @surveys = Survey.all
    redirect '/survey/list'
end

get '/survey/new' do
	erb :new
end

post '/survey' do
	survey = Survey.create(name: params[:title], user_id: session[:user_id])
	# question_length = params[:questions].length
	params[:questions].each do |question|
		question = Question.create(name: question[:name], survey_id: survey.id )
		index = params[:questions].index(question)
		params[:options][index].each do |option|
			Option.create(name: option[:name], question_id: question.id)
		end
	end
	redirect '/survey/list'
end

get '/survey/list' do
	@surveys = Survey.all
	erb :list
end

get '/survey/:id/answer' do
	@survey = Survey.find(params[:id])
	erb :answer
end

post '/survey/:id' do

end
