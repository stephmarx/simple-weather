class Api::V1::IndexController < ApplicationController
	# authorize_resource class: false
	# respond_to :json

	def index
	end

	def location
		respond_with({status: 'wooooo'})
	end
end