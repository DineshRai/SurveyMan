get '/survey/new' do
  puts params
  # Look in app/views/index.erb
  erb :new
end
get '/' do
  p params
  # Look in app/views/index.erb
  erb :new
end
