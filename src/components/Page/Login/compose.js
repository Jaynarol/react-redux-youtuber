import { compose, toClass } from 'recompose'
import component from './component'

const enhance = compose(
  componentClass => class extends toClass(componentClass) {
    componentWillMount() {
      if (this.props.isLogin) {
        this.props.redirect('/')
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isLogin) {
        this.props.redirect('/')
      }
    }
  }
)

export default enhance(component)