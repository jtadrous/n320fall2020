//Setup a new Vue Application object
let app = new Vue ({
    el: "#app",
    data: {
        books: [
            {title: "The Book Thief", author: "Markus Zusak", emoji: "", now: true},
            {title: "The Maze Runner", author: "James Dashner", emoji: "", now: false},
            {title: "Truly Devious", author: "Maureen Johnson", emoji: "", now: false}
        ]
    },
    methods: {}
});