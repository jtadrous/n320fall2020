//Setup a new Vue Component
Vue.component("book-view", {
    props: ["book"],

    //this template displays the title, author, and emoji of a certain book as long as the v-if=true
    template: "<div v-if=\"book.now\">{{book.title}}<br/>By: {{book.author}}<br/><br/>{{book.emoji}}</div>"
});

//Created a counter to keep track of which book is next in line to be shown
let counter = 1;

//Setup a new Vue Application object
let app = new Vue ({
    el: "#app",
    data: {
        //This is an array of book objects. Each object stores the book's specific properties.
        books: [
            {id: 1, title: "The Book Thief", author: "Markus Zusak", emoji: "📚🇩🇪", color: "#239e7b", now: true},
            {id: 2, title: "The Maze Runner", author: "James Dashner", emoji: "🏃👾", color: "#4287f5", now: false},
            {id: 3, title: "Truly Devious", author: "Maureen Johnson", emoji: "🕵️🔪", color: "#f27938", now: false}
        ]
    },
    methods: {
        //This method loops through the books array and compares the counter to the loop iteration.
        showBook: function () {
            counter++;

            //When the counter and book.id are equal it changes the 'now' attribute to true so the v-if=true
            //and thus the book shows up on the page.
            for (i = 0; i < this.books.length; i++) {
                if (counter == this.books[i].id) {
                    this.books[i].now = true; 
                } else {
                    this.books[i].now = false;
                }
            }

            //When the counter reaches the books array length, it resets to 0 to restart the cycle.
            if (counter == this.books.length) {
                counter = 0;
            }
        }
    }
});