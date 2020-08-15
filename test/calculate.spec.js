import { shallowMount } from '@vue/test-utils'
import calculate from "../pages/calculate"

describe('test for calculate', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(calculate, {
      mocks: {
        $router: {
          push: jest.fn()
        }
      }
    })
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('interaction', () => {
    it('연봉을 입력하지 않고 버튼을 누르면 페이지가 이동되지 않는다.', () => {
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
    })

    it('연봉을 입력하고 부양가족을 선택하지 않고 버튼을 누르면 페이지가 이동되지 않는다.', async () => {
      await wrapper.setData({
        salary: 5000
      })
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
    })

    it('연봉에 숫자가 아닌 값을 입력하고 버튼을 누르면 페이지가 이동되지 않는다.', async () => {
      await wrapper.setData({
        salary: 'TEST_SALARY'
      })
      wrapper.find('.button--green').trigger('click')
      expect(wrapper.vm.$router.push).not.toHaveBeenCalled()
    })

    it('연봉을 입력하고, 부양가족 수를 선택하고 버튼을 누르면 페이지가 이동된다.', async () => {
      wrapper.setData({
        salary: 5000,
        selectedFamilyOption: 1
      })
      await wrapper.vm.$nextTick()
      wrapper.find('button').trigger('click')
      expect(wrapper.vm.$router.push).toHaveBeenCalled()
    })
  })
})
