get '/user' do
  redirect '/' unless logged_in?
  p '*'*100
  p current_user
  p '*'*100
  p current_user.surveys
  p '*'*100
  @surveys = current_user.surveys
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
