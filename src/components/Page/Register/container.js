import { connect } from 'react-redux'
import { signupAuth } from '../../../actions/auth'
import form, { initialValues } from './form'

const mapStateToProps = () => ({
  initialValues
})

const mapDispatchToProps = {
  signupAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(form)