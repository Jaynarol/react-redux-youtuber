import { connect } from 'react-redux'
import { signupAuth } from '../../../actions/auth'
import form, { initialValues } from './form'

export const mapStateToProps = () => ({
  initialValues
})

export const mapDispatchToProps = {
  signupAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(form)