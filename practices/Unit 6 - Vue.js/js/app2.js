Vue.component("clock-view", {
    props: ["clock"],
    template: "<div>{{hour}}</div>",
    data: function () {
        return {
            hour: 11
        }
    }
});

let clockTime = "11:00";
let time = "am";
let day = "";

let app = new Vue ({
    el: "#app",
    data: {
        text: "The time is " + clockTime + time,
        food: "Menu: " + day
    },
    methods: {
        getFood: function() {
            if (time == "am") {
                day = "It is breakfast time.";
            } else {
                day = "It is dinner time."
            }
        }
    }
});