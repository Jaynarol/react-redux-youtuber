import Index, { GUEST, MEMBER } from '../'
import { GUEST as TYPE_GUEST, MEMBER as TYPE_MEMBER } from '../type'
import Container from '../container'

describe('AppRoute Wrapper', () => {
  it('wrapper with container', () => {
    expect(Index).toBe(Container)
  })

  it('type', () => {
    expect(GUEST).toBe(TYPE_GUEST)
    expect(MEMBER).toBe(TYPE_MEMBER)
  })
})