import { initialValues } from '../components/Page/Register/form'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
class Server {

  static postRegister(email, pass) {
    const message = {}
    if (email !== initialValues.email) {
      message.email = 'this email already sign-up'
    }
    if (pass !== initialValues.pass) {
      message.pass = 'can\'t use this password'
    }
    return delay(3000)
      .then(() => ({
        success: Object.keys(message).length === 0,
        message
      }))
  }

  static postLogin(email, pass) {
    const message = {}
    if (email !== initialValues.email) {
      message.email = 'email not found'
    }
    if (pass !== initialValues.pass) {
      message.pass = 'password wrong'
    }
    return delay(3000)
      .then(() => ({
        success: Object.keys(message).length === 0,
        message,
        token: 'sometoken'
      }))
  }

}


export default Server