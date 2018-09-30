require 'rubygems'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader' if development?

set :database, 'sqlite3:pizzashop.db'

class Product < ActiveRecord::Base
end

get '/' do
  @products = Product.all
  erb :index
end
