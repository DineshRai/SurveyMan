get '/user' do
  user = User.find(session[:user_id])
  @surveys = Survey.where(user: user)
  erb :user
end


get '/user/logout' do
  session[:user_id] = nil
  redirect '/'
end


post '/user/login' do
  @email = params[:email]
  user = User.authenticate(@email, params[:password])
  if user
    session[:user_id] = user.id
    @surveys = Survey.all
    redirect '/survey'
  else
    redirect '/'
  end
end


post '/user/signup' do
  @user = User.new(email: params[:email], password: params[:password])
  if @user.save
    session[:user_id] = @user.id
  end
  @surveys = Survey.all
  redirect '/survey'
end
