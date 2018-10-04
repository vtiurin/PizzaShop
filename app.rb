require 'rubygems'
require 'sinatra'
require 'sinatra/activerecord'
require 'sinatra/reloader' if development?

set :database, 'sqlite3:pizzashop.db'
enable :sessions

class Product < ActiveRecord::Base
end

get '/' do
  @products = Product.all
  session[:test] = 'test'
  erb :index
end

get '/cart' do
  puts "****************** session is: #{session}"
  puts "****************** session test is: #{session[:test]}"
  puts "****************** session ids is: #{session[:ids]}"
  @products = Product.find(session[:ids])
  erb :'/cart/index'
end

post '/cart' do
  cart = JSON.parse(request.body.read)
  puts cart
  items = cart['items']
  ids_array = items.reduce([]) { |acc, item| acc.push(item['id']) }
  puts ids_array
  session[:ids] = ids_array
  puts "****************** session is: #{session}"
  puts "****************** session ids is: #{session[:ids]}"
end
