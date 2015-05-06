class Api::V1::IndexController < ApplicationController
	# authorize_resource class: false

	def index
		@w_api = Wunderground.new(Figaro.env.wunderground_api_key)
		puts @w_api.forecast_for("WA", "Spokane")
	end

	def location
		# make an call to wunderground api
		# render json: something from wunderground
	end
end