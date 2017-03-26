import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import PageRegister from './PageRegister'
import { initialValues, validate } from './form'

const form = reduxForm({
  form: 'register',
  validate
})(PageRegister)

const mapStateToProps = () => ({
  initialValues
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(form)