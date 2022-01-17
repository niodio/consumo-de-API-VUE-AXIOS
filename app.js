const MyApp = {
  data() {
    return {
      info: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        this.info = response.data.bpi;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },

  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};

Vue.createApp(MyApp).mount("#app");
