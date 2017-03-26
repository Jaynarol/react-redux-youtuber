export default class FakeServer {

  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  static postRegister() {
    return this.sleep(3000)
      .then(() => ({ success: true }))
  }

}