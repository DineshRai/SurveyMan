get '/user' do
  redirect '/' unless logged_in?
  user = User.find(session[:user_id])
  @surveys = Survey.where(user: user)
  erb :user
end


get '/user/logout' do
  redirect '/' unless logged_in?
  session.clear
  redirect '/'
end


post '/user/login' do
  user = User.authenticate(params[:email], params[:password])
  if user
    session[:user_id] = user.id
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
  redirect '/survey'
end
