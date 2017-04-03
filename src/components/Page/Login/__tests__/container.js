import { push as redirect } from 'connected-react-router'
import { mapStateToProps, mapDispatchToProps } from '../container'
import { signinAuth } from '../../../../actions/auth'
import { initialStore } from '../../../../store'

describe('PageLogin Container', () => {
  const state = { auth: { ...initialStore.auth } }

  it('mapStateToProps', () => {
    const props = mapStateToProps(state)
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['isLogin', 'initialValues'])
    expect(props.isLogin).toBe(false)
  })

  it('mapStateToProps isLogin true', () => {
    state.auth.token = 'sometoken'
    const props = mapStateToProps(state)
    expect(props.isLogin).toBe(true)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(2)
    expect(mapDispatchToProps.signinAuth).toBe(signinAuth)
    expect(mapDispatchToProps.redirect).toBe(redirect)
  })
})