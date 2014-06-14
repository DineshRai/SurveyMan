require 'json'

get '/' do
  erb :index
end

post '/login' do
  @email = params[:email]
  @password = params[:password]
  if user
    session[:user_id] = user.id
  end
  @surveys = Survey.all
  redirect '/sruvey'
end


post '/signup' do
  @user = User.new(email: params[:email], password: params[:password])
  if @user.save
    session[:user_id] = @user.id
  end
  @surveys = Survey.all

  redirect '/survey'

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
	redirect '/survey'

end

get '/survey' do
	@surveys = Survey.all
	erb :list
end

get '/survey/:id' do
	@survey = Survey.find(params[:id])
	erb :answer
end

post '/survey/:id' do
	params = JSON.parse(params)
	raise params.inspect
end
