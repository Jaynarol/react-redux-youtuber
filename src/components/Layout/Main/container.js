import { connect } from 'react-redux'
import compose from './compose'
import { signoutAuth } from '../../../actions/auth'

export const mapStateToProps = state => ({
  isLogin: !!state.auth.token
})

export const mapDispatchToProps = {
  signoutAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(compose)