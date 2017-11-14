import shim from './../shim.js'
import React from 'react';
import { configure,  shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './../app.js'

configure({ adapter: new Adapter() });

describe('test', ()=>{

  const app = shallow(<App />)

  it('input', ()=>{
    app.find('input').simulate('change', {target: {value: 'My new value'}})
    expect(app.state('input')).toBe('My new value')

    app.find('button').simulate('click')
    expect(app.state('input')).toBe('')
  })

})
