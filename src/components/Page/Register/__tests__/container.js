import { mapStateToProps, mapDispatchToProps } from '../container'

describe('PageRegister Container', () => {

  it('mapStateToProps', () => {
    expect(mapStateToProps()).toHaveProperty('initialValues')
  })

  it('mapDispatchToProps', () => {
    expect(mapDispatchToProps).toHaveProperty('signupAuth')
  })

})