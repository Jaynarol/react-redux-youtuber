import { mapStateToProps, mapDispatchToProps } from '../container'
import { signinAuth } from '../../../../actions/auth'

describe('PageLogin Container', () => {
  it('mapStateToProps', () => {
    const props = mapStateToProps()
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['initialValues'])
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.signinAuth).toBe(signinAuth)
  })
})