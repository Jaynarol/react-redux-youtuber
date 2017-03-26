import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { initialValues, validate } from './form'
import PageRegister from './PageRegister'
import { signupAuth } from '../../../actions/auth'

const form = reduxForm({
  form: 'register',
  destroyOnUnmount: false,
  validate
})(PageRegister)

const mapStateToProps = () => ({
  initialValues
})

const mapDispatchToProps = { signupAuth }

export default connect(mapStateToProps, mapDispatchToProps)(form)