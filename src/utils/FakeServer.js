const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const FakeServer = (error = false) => (

  class {

    static postRegister() {
      return delay(3000)
      .then(() => ({
        success: !error,
        message: {
          email: 'this email already sign-up',
          pass: 'this pass easy to hack'
        }
      }))
    }

  }

)

export default FakeServer