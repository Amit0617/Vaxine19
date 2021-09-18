let pin = document.getElementById("pin").value;
let givendate = document.getElementById("date").value;

function getFromPin() { const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+givendate+'';

const vm = new Vue({
        el: '#app',
        data () {
          return {
             info : null
          }
        },
        mounted() {
          axios.get(url).then(response => (
            this.info = response.sessions
          ))
        }
      });

};
