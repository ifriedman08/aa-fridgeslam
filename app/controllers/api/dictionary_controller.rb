class Api::DictionaryController < ApplicationController
  def index
    render json: WORDS
  end
end
