import { initialValues } from '../components/Page/Register/form'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
class Server {

  static postRegister(email) {
    return delay(3000)
      .then(() => ({
        success: email === initialValues.email,
        message: {
          email: email !== initialValues.email ? 'this email already sign-up' : ''
        }
      }))
  }

}


export default Server