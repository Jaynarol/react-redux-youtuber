import React from 'react'
import { shallow } from 'enzyme'
import FieldCheckbox from '../component'

describe('FieldCheckbox', () => {
  const defaultProps = {
    label: 'checkbox text'
  }
  const setup = (props = {}) => {
    const component = shallow(<FieldCheckbox {...defaultProps} />)
    component.setProps(props)

    return {
      label: component.find('Label'),
      checkbox: component.find('Label [type="checkbox"]'),
      tooltip: component.find('UncontrolledTooltip')
    }
  }

  it('default', () => {
    const component = setup()

    expect(component.label).toHaveLength(1)
    expect(component.checkbox).toHaveLength(1)
    expect(component.tooltip).toHaveLength(1)

    expect(component.checkbox.prop('value')).toBe(false)
    expect(component.checkbox.prop('disabled')).toBe(false)
    expect(component.label.prop('children')).toContain(defaultProps.label)
    expect(component.label.prop('id')).toBe(component.tooltip.prop('target'))
    expect(component.tooltip.prop('isOpen')).toBe(false)
  })

  it('checked', () => {
    const props = { input: { value: true } }
    const component = setup(props)

    expect(component.checkbox.prop('value')).toBe(true)
    expect(component.checkbox.prop('disabled')).toBe(false)
  })

  it('invalid', () => {
    const props = { meta: { touched: true, error: 'error text' } }
    const component = setup(props)

    expect(component.tooltip.prop('isOpen')).toBe(true)
    expect(component.tooltip.prop('children')).toBe(props.meta.error)
  })

  it('submitting', () => {
    const props = { meta: { submitting: true } }
    const component = setup(props)

    expect(component.checkbox.prop('disabled')).toBe(true)
  })
})