require 'rubygems'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader' if development?

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base
end

get '/' do
  erb :index
end