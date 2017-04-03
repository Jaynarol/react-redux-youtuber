import { connect } from 'react-redux'
import { push as redirect } from 'connected-react-router'
import { signinAuth } from '../../../actions/auth'
import form, { initialValues } from './form'

export const mapStateToProps = state => ({
  isLogin: !!state.auth.token,
  initialValues
})

export const mapDispatchToProps = {
  signinAuth,
  redirect
}

export default connect(mapStateToProps, mapDispatchToProps)(form)
