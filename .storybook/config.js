import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'
import 'bootstrap/dist/css/bootstrap.css'

const req = require.context('../src/components', true, /__stories__\/.*.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

setAddon(infoAddon)

configure(loadStories, module);
