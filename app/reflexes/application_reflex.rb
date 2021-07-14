# frozen_string_literal: true

class ApplicationReflex < StimulusReflex::Reflex
  delegate :session_id, to: :connection
  include Pagy::Backend
end
