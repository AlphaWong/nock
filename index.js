'use strict'

const back = require('./lib/back')
const emitter = require('./lib/global_emitter')
const {
  activate,
  isActive,
  isDone,
  pendingMocks,
  activeMocks,
  removeInterceptor,
  disableNetConnect,
  enableNetConnect,
  removeAll: cleanAll,
} = require('./lib/intercept')
const recorder = require('./lib/recorder')
const { Scope, load, loadDefs, define } = require('./lib/scope')

module.exports = (...args) => new Scope(...args)

Object.assign(module.exports, {
  activate,
  isActive,
  isDone,
  pendingMocks,
  activeMocks,
  removeInterceptor,
  disableNetConnect,
  enableNetConnect,
  cleanAll,
  load,
  loadDefs,
  define,
  emitter,
  recorder: {
    rec: recorder.record,
    clear: recorder.clear,
    play: recorder.outputs,
  },
  restore: recorder.restore,
  back,
})
