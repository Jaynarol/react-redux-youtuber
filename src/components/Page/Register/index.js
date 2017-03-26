import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { signupAuth } from '../../../actions/auth'
import { initialValues, validate } from './form'
import PageRegister from './ui'

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