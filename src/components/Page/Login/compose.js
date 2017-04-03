import { compose, toClass } from 'recompose'
import component from './component'

const enhance = compose(
  componentClass => class extends toClass(componentClass) {
    componentWillMount() {
      if (this.props.isLogin) {
        console.log('componentWillMount', this.props)
        this.props.redirect('/')
      }
    }
    componentWillUpdate(nextProps) {
      if (nextProps.isLogin) {
        console.log('componentWillUpdate', nextProps)
        this.props.redirect('/')
      }
    }
  }
)

export default enhance(component)