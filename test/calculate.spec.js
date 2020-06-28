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

  describe('interaction', () => {
    it('연봉을 입력하지 않고 버튼을 누르면 페이지가 이동되지 않는다.', () => {
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
    })

    it('연봉에 숫자가 아닌 값을 입력하고 버튼을 누르면 페이지가 이동되지 않는다.', () => {
      wrapper.setData({
        salary: 'TEST_SALARY'
      })
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
    })

    it('연봉을 입력하고 버튼을 누르면 페이지가 이동된다.', () => {
      wrapper.setData({
        salary: 5000
      })
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).toHaveBeenCalled()
    })
  })
})
