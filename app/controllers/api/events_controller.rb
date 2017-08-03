module Api
  class EventsController < ApplicationController
    class index
      render json: Event.all
    end
  end
end
