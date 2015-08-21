class Api::SlamMembershipsController < ApplicationController

  def create
    @membership = SlamMembership.new(membership_params)
    if @membership.save
      render json: @membership
    else
      render json: @memebrship.errors.full_messages, status: 422
    end
  end

  def membership_params
    params.require(:slam_membership).permit(:user_id, :slam_id)
  end
end
