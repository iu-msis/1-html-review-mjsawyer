const Offer = {
  data() {
    return {
      "result": {},
      "offers": [
        {
          "id": 1,
          "name": "Jordan Doe",
          "salary": 120000,
          "bonus": 9000,
          "company": "EY",
          "offerDate": "2021-10-12"
        },

        computed: {
          prettybirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
          }

        },
        methods: {


        },
        created()
        {
          "id": 2,
          "name": "Jesse Doe",
          "salary": 90000,
          "bonus": 2000,
          "company": "IU",
          "offerDate": "2021-10-12"
        }
      ]
    }

    created() {
      fetch('https://randomuser.me/api')
      .then(
        function(response) {
          return response.json()
        }
      )
      .then(
        function(json) {
          console.log(json);
          this.result = json.results[0];
        }
      )
//      .catch( () ) //
    }

  }
}

Vue.createApp(Offer).mount('#offerApp')
