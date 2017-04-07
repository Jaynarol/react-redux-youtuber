import { connect } from 'react-redux'
import { GUEST, MEMBER } from './type'
import component from './component'

export const mapStateToProps = state => ({
  userType: state.auth.token ? MEMBER : GUEST
})

export default connect(mapStateToProps)(component)