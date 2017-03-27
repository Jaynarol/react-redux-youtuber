import { connect } from 'react-redux'
import { signupAuth } from '../../../actions/auth'
import PageRegister, { initialValues } from './form'

const mapStateToProps = () => ({
  initialValues
})

const mapDispatchToProps = {
  signupAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRegister)