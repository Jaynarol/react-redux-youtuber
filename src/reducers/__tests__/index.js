import fs from 'fs'
import { reducers } from '../index'

describe('rootReducers', () => {
  it('combine all reducer file', () => {
    const keyReducer = Object.keys(reducers)

    fs.readdirSync('src/reducers')
      .filter(name => name !== 'index.js' && name.includes('.js'))
      .map(name => name.split('.')[0])
      .forEach(name => {
        expect(keyReducer).toContain(name)
      })
  })
})