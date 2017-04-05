import { mapStateToProps, mapDispatchToProps } from '../container'
import { signoutAuth } from '../../../../actions/auth'
import { initialStore } from '../../../../store'

describe('LayoutMain Container', () => {
  const state = { auth: { ...initialStore.auth } }

  it('mapStateToProps', () => {
    const props = mapStateToProps(state)
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['isLogin'])
    expect(props.isLogin).toBe(false)
  })

  it('mapStateToProps isLogin true', () => {
    state.auth.token = 'sometoken'
    const props = mapStateToProps(state)
    expect(props.isLogin).toBe(true)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.signoutAuth).toBe(signoutAuth)
  })
})