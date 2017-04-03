import { mapStateToProps, mapDispatchToProps } from '../container'
import { signupAuth } from '../../../../actions/auth'

describe('PageRegister Container', () => {
  it('mapStateToProps', () => {
    const keyMapStateToProps = Object.keys(mapStateToProps())
    const expectedKey = ['initialValues']

    expect(keyMapStateToProps).toEqual(expectedKey)
  })

  it('mapDispatchToProps', () => {
    expect(mapDispatchToProps.signupAuth === signupAuth).toBe(true)
  })
})