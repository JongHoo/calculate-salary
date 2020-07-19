<template lang="pug">
.calculate
  .form__group(field)
    input.form__field(type="input" placeholder="입력하세요." name="salary" id="salary" required
      @keypress="onKeypressForSalary" v-model="salary")
    label.form__label(for="salary") 연봉을 입력하세요. (만원)
    v-select.dropdown(placeholder="부양 가족 수 (본인포함)" :options="familyOptions" @input="onSelectFamilyOption")
  .btn-area
    button.button--green(@click="calculateSalary" :disabled="!salary || !selectedFamilyOption") 계산
  .btn-area
    span(@click="moveHome" style="cursor: pointer;") Home
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const numberOnlyRegex = new RegExp(/^\d+$/)
export default {
  name: "calculate",
  components: {
    vSelect
  },
  data () {
    return {
      salary: '',
      selectedFamilyOption: '',
      familyOptions: [
        { label: '1명', value: 1 },
        { label: '2명', value: 2 },
        { label: '3명', value: 3 },
        { label: '4명', value: 4 },
        { label: '5명', value: 5 },
        { label: '6명', value: 6 },
        { label: '7명', value: 7 },
        { label: '8명', value: 8 },
        { label: '9명', value: 9 },
        { label: '10명', value: 10 },
        { label: '11명 이상', value: 11 },
      ]
    }
  },
  methods: {
    onSelectFamilyOption (option) {
      if (!option) {
        this.selectedFamilyOption = ''
        return
      }
      this.selectedFamilyOption = option.value
    },
    onKeypressForSalary (e) {
      if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false
    },
    calculateSalary () {
      if (!this.salary || !numberOnlyRegex.test(this.salary) || !this.selectedFamilyOption) return
      this.$router.push({ name: 'result', params: { salary: this.salary, famNumber: `numOfFam${this.selectedFamilyOption}` } })
    },
    moveHome () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style scoped lang="less">
.calculate {
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > .btn-area {
    margin-top: 30px;
    & > span {
      color: #7f7f7f;
    }
  }
}

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 210px;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #000000;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
}
.form__field::placeholder {
  color: transparent;
}
.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #9b9b9b;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #002776;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}

.dropdown {
  margin-top: 20px;
}
</style>
<style lang="less">
.calculate {
  input::placeholder {
    color: #9b9b9b;
  }
}
</style>
