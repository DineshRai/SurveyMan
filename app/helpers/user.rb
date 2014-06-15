helpers do
  def current_user
    if session[:user_id]
      return nil unless @current_user = User.where(id: session[:user_id]).first
      @current_user
    end
  end
  def logged_in?
    !current_user.nil?
  end
end
