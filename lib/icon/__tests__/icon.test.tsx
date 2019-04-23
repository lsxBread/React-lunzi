import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import React from 'react';
import Icon from '../icon';

describe('icon', () => {
  it('render success', () => {
    const json = renderer.create(<Icon name='wechat'/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    const fn = jest.fn()
    const component = mount(<Icon name='wechat' onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})