class StaticPagesController < ApplicationController
  before_action :require_sign_in, only: [:root]
  def root
    render :root
  end
end
