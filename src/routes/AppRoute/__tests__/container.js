import { mapStateToProps } from '../container'
import { initialStore } from '../../../store'
import { GUEST, MEMBER } from '../type'

describe('AppRoute Container', () => {
  const state = { auth: { ...initialStore.auth } }

  it('mapStateToProps default', () => {
    const props = mapStateToProps(state)
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['userType'])
    expect(props.userType).toBe(GUEST)
  })

  it('mapStateToProps userType Member', () => {
    state.auth.token = 'sometoken'
    const props = mapStateToProps(state)

    expect(props.userType).toBe(MEMBER)
  })

})