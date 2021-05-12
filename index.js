const midi = require('midi')
const robot = require('robotjs')
const bindings = require('./bindings.json')

const input = new midi.Input()

input.on('message', (deltaTime, message) => {
  const key = bindings[message[0]]?.[message[1]]

  if (key) {
    robot.keyTap(key)
  }
})

input.openPort(0)

const cleanup = (exitCode = 0) => {
  input.closePort()
  process.exit(exitCode)
}

process.on('SIGINT', cleanup)
process.on('SIGTERM', cleanup)
