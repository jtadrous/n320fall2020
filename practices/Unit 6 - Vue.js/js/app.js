//Vue Application Object
let counter = 4;
Vue.component("course-view", {
    props: ["course"],
    template: "<li>{{course.num}}</li>"
});

let app = new Vue ({
    el: "#app",
    data: {
        text: "Hi, my name is Julie!",
        courses: [
            {id: 0, num: "N320", name: "Intermediate Media Applications"},
            {id: 1, num: "I425", name: "Web Services"},
            {id: 2, num: "A105", name: "Stars and Galaxies"},
            {id: 3, num: "B101", name: "Intro to Psychology"},
            {id: 4, num: "I305", name: "Intro to Research"}
        ],
        now: true
    },
    methods: {
        addCourse: function() {
            var name = prompt("Enter Course Name: ");
            var num = prompt("Enter Course ID: ")
            counter++;
            this.courses.push({counter, num, name});
        }
    }
});