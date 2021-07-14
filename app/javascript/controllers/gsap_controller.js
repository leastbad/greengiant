import { Controller } from 'stimulus'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { GSDevTools } from 'gsap/GSDevTools'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { MotionPathHelper } from 'gsap/MotionPathHelper'
import { CustomWiggle } from 'gsap/CustomWiggle'

export default class extends Controller {
  initialize () {
    gsap.registerPlugin(
      Draggable,
      MotionPathPlugin,
      CustomEase,
      GSDevTools,
      MorphSVGPlugin,
      MotionPathHelper,
      CustomWiggle
    )
    GSDevTools.create()
    CustomWiggle.create('wiggle', { wiggles: 5, type: 'easeInOut' })
  }
  connect () {
    gsap.to(this.element, { duration: 1, x: 100 })
  }
}
