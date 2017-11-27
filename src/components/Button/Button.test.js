// import mountTemplate from '../../../test/mountTemplate'
import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import UDIButton from './Button.vue'

test('should render a button', async () => {
  const renderer = createRenderer()
  const wrapper = shallow(UDIButton)

  expect(wrapper.text()).toContain('')
  expect(wrapper.hasClass('udi-button')).toBe(true)
  expect(wrapper.is('button')).toBe(true)
  renderer.renderToString(wrapper.vm, (err, str) => {
    expect(str).toMatchSnapshot()
  })
})

test('should render a link', async () => {
  const renderer = createRenderer()
  const wrapper = shallow(UDIButton, {
    attachToDocument: true,
    propsData: { link: true, href: 'http://localhost' },
  })

  expect(wrapper.text()).toContain('')
  expect(wrapper.hasClass('udi-link')).toBe(true)
  expect(wrapper.hasProp('link', true)).toBe(true)
  expect(wrapper.hasProp('href', 'http://localhost')).toBe(true)
  renderer.renderToString(wrapper.vm, (err, str) => {
    expect(str).toMatchSnapshot()
  })
})
