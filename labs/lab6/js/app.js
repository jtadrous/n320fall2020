//Setup a new Vue Component
Vue.component("book-view", {
    props: ["book"],
    template: "<div>{{book.title}}<br/>{{book.author}}<br/>{{book.emoji}}</div>"
});

let counter = 0;

//Setup a new Vue Application object
let app = new Vue ({
    el: "#app",
    data: {
        books: [
            {id: 1, title: "The Book Thief", author: "Markus Zusak", emoji: "e", now: true},
            {id: 2, title: "The Maze Runner", author: "James Dashner", emoji: "e", now: false},
            {id: 3, title: "Truly Devious", author: "Maureen Johnson", emoji: "e", now: false}
        ]
    },
    methods: {
        showBook: function () {
            counter++;

        }
    }
});