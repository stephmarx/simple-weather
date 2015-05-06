class Api::V1::IndexController < ApplicationController
	# authorize_resource class: false

	def index
	end

	def location
		w_api = Wunderground.new(Figaro.env.wunderground_api_key)
		forecast = w_api.forecast_for(params[:zip])

		three_day_forecast = forecast["forecast"]["txt_forecast"]["forecastday"][0..5]

		respond_to do |format|
			format.html
			format.json {render :json => three_day_forecast}
		end
	end
end