class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include CableReady::Broadcaster
  delegate :render, to: :ApplicationController
end
