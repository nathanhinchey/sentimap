class RequestsController < ApplicationController

  def create
    @request = Request.new
    render :new
  end


end
