<template lang="pug">
.result
  .result-header
    .header 공제내역
    hr.header-line
  .result-detail
    .line
      .subject 국민연금
      .content {{ makeKrwFormat(taxForPension) }}
    .line
      .subject 건강보험
      .content {{ makeKrwFormat(taxForInsurance) }}
    .line
      .subject 장기요양
      .content {{ makeKrwFormat(taxForOldMan) }}
    .line
      .subject 고용보험
      .content {{ makeKrwFormat(taxForHiring) }}
    .line
      .subject 소득세
      .content {{ makeKrwFormat(taxForIncome) }}
    .line
      .subject 지방소득세
      .content {{ makeKrwFormat(taxForLocal) }}
    .line
      .subject 총합
      .content {{ makeKrwFormat(totalTax) }}
    hr.header-line(style="margin-bottom: 20px;")
    .line
      .subject 실수령액
      .content {{ makeKrwFormat(monthlyAmount - totalTax) }}
  .btn-area
    button.button--green(@click="moveBack") 다시 계산하기
</template>

<script>
import taxTable from "../assets/taxTable"

export default {
  name: "result",
  computed: {
    monthlyAmount () {
      return Math.floor(this.$route.params.salary / 12) * 10000
    },
    monthlyAmountForPension () {
      const salaryPerMonth = Math.floor(this.$route.params.salary / 12)
      return (salaryPerMonth > 486 ? 486 : salaryPerMonth < 30 ? 30 : salaryPerMonth) * 10000
    },
    taxForPension () {
      return Math.floor(this.monthlyAmountForPension) * 0.045
    },
    taxForOldMan () {
      return this.taxForInsurance * 0.1025
    },
    taxForInsurance () {
      return Math.floor(this.monthlyAmount) * 0.03335
    },
    taxForHiring () {
      return Math.floor(this.monthlyAmount) * 0.008
    },
    taxForIncome () {
      const inputKey = this.monthlyAmount / 1000
      const row = taxTable.find(item => item.from <= inputKey && item.to > inputKey)
      return row.numOfFam1
    },
    taxForLocal () {
      return this.taxForIncome / 10
    },
    totalTax () {
      return this.taxForPension + this.taxForOldMan + this.taxForInsurance +
             this.taxForHiring + this.taxForIncome + this.taxForLocal
    }
  },
  methods: {
    makeKrwFormat (number) {
      return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number)
    },
    moveBack () {
      this.$router.push({ name: 'calculate' })
    }
  },
  mounted () {
    if (!this.$route.params.salary) this.moveBack()
  }
}
</script>

<style scoped lang="less">
.result {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  & > .result-header {
    margin-bottom: 20px;
    & > .header {
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 25px;
    }
  }

  & > .result-detail {
    margin-bottom: 30px;
    & > .line {
      display: flex;
      font-weight: bold;
      font-size: 20px;
      margin-bottom: 20px;
      justify-content: space-between;

      & > .subject {
        margin-right: 20px;
        color: #002776;
      }
    }
  }

  & .header-line {
    width: 200px;
    background-image: linear-gradient(to right, #00d355, #00db83, #00e2ab, #00e7cc, #12ebe6);
    height: 2px;
    border: 0px;
  }
}
</style>
