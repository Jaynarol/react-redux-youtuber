import { mapStateToProps, mapDispatchToProps } from '../container'
import { signupAuth } from '../../../../actions/auth'

describe('PageRegister Container', () => {
  it('mapStateToProps', () => {
    const keyProps = Object.keys(mapStateToProps())

    expect(keyProps).toEqual(['initialValues'])
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.signupAuth).toBe(signupAuth)
  })
})