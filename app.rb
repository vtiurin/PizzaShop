require 'rubygems'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader' if development?

get '/' do
  erb :index
end