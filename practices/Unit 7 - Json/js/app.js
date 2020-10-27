Vue.component("data-view", {
    props: ["phones"],
    template: "<div v-for=\"phone in phones\">Hello {{ phone.phone }} - {{ phone.type }}</div>"
});

//Axios method
axios.get("data/data.json")
    .then(function (response) {
        console.log(response);
    });

    let app = new Vue ({
        el: "#app",
        data: function () {
            return {
              phones: null,
            };
        },
        mounted: function () {
            fetch("data/data.json")
              .then((response) => response.json())
              .then((jsonData) => {
                this.phones = jsonData;
              });
          },
    });

//Fetch method
/*fetch ("data/data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.phone);
        this.phones = data;
    }); //creates a js object called data*/