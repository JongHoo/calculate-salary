<template lang="pug">
.result
  .result-header
    .header 공제내역
    hr.header-line
  .result-detail
    .line
      .subject 국민연금
      .content
        span ₩
        span(ref="taxForPension")
    .line
      .subject 건강보험
      .content
        span ₩
        span(ref="taxForInsurance")
    .line
      .subject 장기요양
      .content
        span ₩
        span(ref="taxForOldMan")
    .line
      .subject 고용보험
      .content
        span ₩
        span(ref="taxForHiring")
    .line
      .subject 소득세
      .content
        span ₩
        span(ref="taxForIncome")
    .line
      .subject 지방소득세
      .content
        span ₩
        span(ref="taxForLocal")
    .line
      .subject 총합
      .content
        span ₩
        span(ref="totalTax")
    hr.header-line(style="margin-bottom: 20px;")
    .line
      .subject 실수령액
      .content
        span ₩
        span(ref="resultAmount")
  .btn-area
    button.button--green(@click="moveBack") 다시 계산하기
</template>

<script>
import taxTable from "../assets/taxTable"
import { CountUp } from 'countup.js'

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

      if (inputKey < 10000) {
        return taxTable.find(item => item.from <= inputKey && item.to > inputKey)[this.$route.params.famNumber]
      }

      const defaultTax = taxTable.find(item => item.from === 10000)[this.$route.params.famNumber]
      if (inputKey === 10000) {
        return defaultTax
      } else if (inputKey > 10000 && inputKey <= 14000) {
        return defaultTax + (inputKey - 10000) * 0.98 * 0.35
      } else if (inputKey > 14000 && inputKey <= 28000) {
        return defaultTax + 1372000 + (inputKey - 14000) * 0.98 * 0.38
      } else if (inputKey > 28000 && inputKey <= 30000) {
        return defaultTax + 6585600 + (inputKey - 28000) * 0.98 * 0.4
      } else if (inputKey > 30000 && inputKey <= 45000) {
        return defaultTax + 7385600 + (inputKey - 30000) * 0.4
      } else { // inputKey > 45000
        return defaultTax + 13385600 + (inputKey - 45000) * 0.42
      }
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
    },
    countUpNumbers () {
      const taxForPensionCountup = new CountUp(this.$refs.taxForPension, this.taxForPension, { duration: 1 })
      const taxForInsuranceCountup = new CountUp(this.$refs.taxForInsurance, this.taxForInsurance, { duration: 1 })
      const taxForOldManCountup = new CountUp(this.$refs.taxForOldMan, this.taxForOldMan, { duration: 1 })
      const taxForHiringCountup = new CountUp(this.$refs.taxForHiring, this.taxForHiring, { duration: 1 })
      const taxForIncomeCountup = new CountUp(this.$refs.taxForIncome, this.taxForIncome, { duration: 1 })
      const taxForLocalCountup = new CountUp(this.$refs.taxForLocal, this.taxForLocal, { duration: 1 })
      const totalTaxCountup = new CountUp(this.$refs.totalTax, this.totalTax, { duration: 1 })
      const resultAmountCountup = new CountUp(this.$refs.resultAmount, this.monthlyAmount - this.totalTax, { duration: 1 })
      taxForPensionCountup.start()
      taxForInsuranceCountup.start()
      taxForOldManCountup.start()
      taxForHiringCountup.start()
      taxForIncomeCountup.start()
      taxForLocalCountup.start()
      totalTaxCountup.start()
      resultAmountCountup.start()
    }
  },
  mounted () {
    if (!this.$route.params.salary || !this.$route.params.famNumber) {
      this.moveBack()
      return
    }
    this.countUpNumbers()
  }
}
</script>

<style scoped lang="less">
.result {
  margin: 0 auto;
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
      font-size: 20px;
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
