export default class FakeServer {

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  static postRegister() {
    return this.sleep(3000)
      .then(() => ({
        success: true,
        error: {
          email: 'this email already sign-up',
          pass: 'this pass easy to hack'
        }
      }))
  }

}