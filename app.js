const app = Vue.createApp({
  data() {
    return {
      title: "The Sign of The Beaver",
      author: 'Elizabeth George Speare',
      url: "https://kaharerbol.com/",
      year: 1984,
      pageRead: 0,
      notes: "Write notes here.",
      showBooks: true,
      x: 0,
      y:0,
      books:[
        { title: "To Kill a Mockingbird", author: "Harper Lee", img: 'assets/1.jpeg', isFav: true },
        { title: "1984", author: "George Orwell", img: 'assets/2.jpeg', isFav: false },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: 'assets/3.jpeg', isFav: true }
      ]  
    }
  },
  methods: {
    changeNotes(note) {
      if (note) {
        this.notes = note
      }
      else {
        this.notes = "Notes Updated."
      }
      console.log("you clicked me.")
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log("the data: ", data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX,
      this.y = e.offsetY
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount('#app')
