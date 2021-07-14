import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'
import StimulusReflex from 'stimulus_reflex'
import consumer from '../channels/consumer'
import controller from './application_controller'
import CableReady from 'cable_ready'

const application = Application.start()
const app = require.context('controllers', true, /_controller\.js$/)
application.load(definitionsFromContext(app))
application.consumer = consumer

StimulusReflex.initialize(application, {
  controller,
  isolate: true
})

if (process.env.RAILS_ENV === 'development') {
  StimulusReflex.debug = true
}

CableReady.initialize(application)
