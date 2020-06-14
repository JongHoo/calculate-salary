import { shallowMount } from '@vue/test-utils'
import calculate from "../pages/calculate"

describe('test for calculate', () => {
  const $router = {
    push: jest.fn()
  }
  const wrapper = shallowMount(calculate, {
    mocks: {
      $router
    }
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('연봉을 입력하지 않고 버튼을 누르면 페이지가 이동되지 않는다.', function () {
    wrapper.find('.btn-grad').trigger('click')
    expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
  })

  it('연봉을 입력하고 버튼을 누르면 페이지가 이동된다.', function () {
    wrapper.setData({
      salary: 5000
    })
    wrapper.find('.btn-grad').trigger('click')
    expect(wrapper.vm.$router.push).toHaveBeenCalled()
  })
})
