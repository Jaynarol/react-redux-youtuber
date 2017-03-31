import React from 'react'
import { shallow } from 'enzyme'
import PageRegister from '../component'
import { initialValues, validates } from '../form'

describe('PageRegister Form', () => {
  const component = shallow(<PageRegister handleSubmit={() => true} signupAuth={() => true} />)
  const fields = component.find('Field').map(field => field.prop('name'))

  it('initialValues', () => {
    expect(Object.keys(initialValues)).toEqual(fields)
  })

  it('validates', () => {
    expect(Object.keys(validates)).toEqual(fields)
  })
})