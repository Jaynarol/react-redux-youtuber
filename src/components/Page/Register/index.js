import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { initialValues, validate } from './form'
import PageRegister from './PageRegister'
import { signupAuth } from '../../../actions/auth'

const form = reduxForm({
  form: 'register'
})(PageRegister)

const mapStateToProps = () => ({
  initialValues,
  validate
})

const mapDispatchToProps = { signupAuth }

export default connect(mapStateToProps, mapDispatchToProps)(form)