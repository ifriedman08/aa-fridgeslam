class SlamMembershipsController < ApplicationController

  def create
    @membership = SlamMembership.new
  end
end
