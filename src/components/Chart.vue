<template>
  <div v-show="isLoggedIn" class="chart">
    <h1>My Google Chart</h1>
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "Chart",
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.state.loggedIn;
    }
  }
};
</script>

<style scoped>
.chart {
  display: flex;
  flex-direction: column;
}
</style>
