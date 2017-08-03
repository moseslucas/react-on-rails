class DashboardController < ApplicationController
  def index
  end

  def tae
    render component: 'EventApplication'
  end
end
