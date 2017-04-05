import { compose, withHandlers, withState } from 'recompose'
import component from './component'

const enchance = compose(
  withState('isOpen', 'toggle', false),
  withHandlers({
    toggleNav: props => () => props.toggle(open => !open)
  })
)
export default enchance(component)