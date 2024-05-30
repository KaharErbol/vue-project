const app = Vue.createApp({
  data() {
    return {
      title: "The Sign of The Beaver",
      author: 'Elizabeth George Speare',
      year: 1984,
      pageRead: 0,
      notes: "Write notes here.",
      showBooks: true
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
    }
  }
})

app.mount('#app')
