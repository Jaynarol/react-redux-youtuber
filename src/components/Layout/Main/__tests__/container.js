import { mapStateToProps, mapDispatchToProps } from '../container'
import { signoutAuth } from '../../../../actions/auth'
import { initialStore } from '../../../../store'

describe('LayoutMain Container', () => {
  const state = { auth: { ...initialStore.auth } }

  it('mapStateToProps default', () => {
    const props = mapStateToProps(state)
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['isMember'])
    expect(props.isMember).toBe(false)
  })

  it('mapStateToProps isMember is true', () => {
    state.auth.token = 'sometoken'
    const props = mapStateToProps(state)
    expect(props.isMember).toBe(true)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.signoutAuth).toBe(signoutAuth)
  })
})