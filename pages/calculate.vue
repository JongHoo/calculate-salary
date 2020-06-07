<template lang="pug">
.calculate
  .form__group(field)
    input.form__field(type="input" placeholder="입력하세요." name="salary" id="salary" required
      @keypress="onKeypressForSalary" v-model="salary")
    label.form__label(for="salary") 연봉을 입력하세요. (만원)
  .btn-area
    button.btn-grad(@click="calculateSalary") 계산
</template>

<script>
export default {
  name: "calculate",
  data () {
    return {
      salary: ''
    }
  },
  methods: {
    onKeypressForSalary (e) {
      if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false
    },
    calculateSalary () {
      if (!this.salary) return
      this.$router.push({ name: 'result', params: { salary: this.salary } })
    }
  }
}
</script>

<style scoped lang="less">
.calculate {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > .btn-area {
    margin-top: 30px;
    & > .btn-grad {
      background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA 51%);
      border: none;
      color: #fff;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      border-radius: 10px;
      width: 120px;
      height: 50px;
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
  border-image: linear-gradient(to right, #fc00aa, #00dbde);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #a83fd5;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
</style>
