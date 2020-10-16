//Setup a new Vue Component
Vue.component("book-view", {
    props: ["book"],
    template: "<div v-if=\"book.now\">{{book.title}}<br/>{{book.author}}<br/>{{book.emoji}}</div>"
});

let counter = 0;

//Setup a new Vue Application object
let app = new Vue ({
    el: "#app",
    data: {
        books: [
            {id: 1, title: "The Book Thief", author: "Markus Zusak", emoji: "emoji", now: true},
            {id: 2, title: "The Maze Runner", author: "James Dashner", emoji: "emoji", now: false},
            {id: 3, title: "Truly Devious", author: "Maureen Johnson", emoji: "emoji", now: false}
        ]
    },
    methods: {
        showBook: function () {
            counter++;
            if (counter == 1) {
                this.books[0].now = true;
                this.books[1].now = false;
                this.books[2].now = false;
            } else if (counter == 2) {
                this.books[0].now = false;
                this.books[1].now = true;
                this.books[2].now = false;
            } else if (counter == 3) {
                this.books[0].now = false;
                this.books[1].now = false;
                this.books[2].now = true;
                counter = 0;
            }
        }
    }
});