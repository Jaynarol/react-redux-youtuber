import React from 'react'
import { shallow } from 'enzyme'
import FieldInput from '../component'

describe('FieldInput', () => {
  const defaultProps = {
    label: 'some text'
  }
  const setup = (props = {}) => {
    const component = shallow(<FieldInput {...defaultProps} />)
    component.setProps(props)

    return {
      input: component.find('InputGroup [placeholder]'),
      tooltip: component.find('UncontrolledTooltip')
    }
  }

  it('default', () => {
    const component = setup()

    expect(component.input).toHaveLength(1)
    expect(component.input.prop('placeholder')).toBe(defaultProps.label)
    expect(component.input.prop('type')).toBe('text')
    expect(component.input.prop('disabled')).toBe(false)
    expect(component.input.prop('id')).toBe(component.tooltip.prop('target'))

    expect(component.tooltip).toHaveLength(1)
    expect(component.tooltip.prop('isOpen')).toBe(false)
  })

  it('password', () => {
    const component = setup({ type: 'password' })

    expect(component.input).toHaveLength(1)
    expect(component.input.prop('type')).toBe('password')
  })

  it('submitting', () => {
    const component = setup({ meta: { submitting: true } })

    expect(component.input).toHaveLength(1)
    expect(component.input.prop('disabled')).toBe(true)
  })

  it('invalid', () => {
    const props = { meta: { touched: true, error: 'some error' } }
    const component = setup(props)

    expect(component.tooltip).toHaveLength(1)
    expect(component.tooltip.prop('isOpen')).toBe(true)
    expect(component.tooltip.prop('children')).toBe(props.meta.error)
  })
})