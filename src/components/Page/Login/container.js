import { connect } from 'react-redux'
import { signinAuth } from '../../../actions/auth'
import form, { initialValues } from './form'

export const mapStateToProps = () => ({
  initialValues
})

export const mapDispatchToProps = {
  signinAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(form)
