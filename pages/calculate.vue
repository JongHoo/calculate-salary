<template lang="pug">
  .calculate
    .form__group(field)
      input.form__field(type="input" placeholder="입력하세요." name="salary" id="salary" required
        @keypress="onKeypressForSalary" v-model="salary")
      label.form__label(for="salary") 연봉을 입력하세요. (만원)
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
    }
  }
}
</script>

<style scoped>
.calculate {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  text-align: right;
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
  border-image: linear-gradient(to right, #11998e, #38ef7d);
  border-image-slice: 1;
}
.form__field:focus ~ .form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #11998e;
  font-weight: 700;
}

/* reset input */
.form__field:required, .form__field:invalid {
  box-shadow: none;
}
</style>
