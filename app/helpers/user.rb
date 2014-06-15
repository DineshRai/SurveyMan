helpers do
  def current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end
  def logged_in?
    p !current_user.nil?
  end
end
