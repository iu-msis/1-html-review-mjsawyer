const SomeApp = {
     data() {
       return {
         "books": [],
         "selectedBook": null,
         "bookForm": {}
       }
     },
    computed: {},
     methods: {
         prettyData(d) {
             return dayjs(d)
             .format('D MMM YYYY')
         },
         prettyDollar(n) {
             const d = new Intl.NumberFormat("en-US").format(n);
             return "$ " + d;
         },



         fetchBookData() {
             fetch('/api/books/')
             .then( response => response.json() )
             .then( (responseJson) => {
                //  console.log(responseJson);
                 this.books = responseJson;
             })
             .catch( (err) => {
                 console.error(err);
             })
         },

         postNewBook(evt) {

           console.log("Creating:", this.bookForm);
           // alert("Posting!");

           fetch('api/books/create.php', {
               method:'POST',
               body: JSON.stringify(this.bookForm),
               headers: {
                 "Content-Type": "application/json; charset=utf-8"
               }
             })
             .then( response => response.json() )
             .then( json => {
               console.log("Returned from post:", json);
               // TODO: test a result was returned!
               this.books = json;

               // reset the form
               this.bookForm = {};
             });
         },
         postEditBooks(evt) {

          console.log("Editing!", this.bookForm);

          fetch('api/books/update.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              this.books = json;

              // reset the form
              this.handleResetEdit();
            });

        },
        postBook(evt) {
            if (this.selectedBook === null) {
                this.postNewBook(evt);
            } else {
                this.postEditBooks(evt);
            }
          },

        postDeleteBooks(book) {
          if ( !confirm("Are you sure you want to delete the offer from " + book.authorName + "?") ) {
              return;
          }
          console.log("Delete!", book);

          fetch('api/books/delete.php', {
            method:'POST',
            body: JSON.stringify(book),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;

            // reset the form
            this.handleResetEdit();
          });
      },

      handleEditBooks(o) {
        this.selectedBook = o;
        this.bookForm = Object.assign({}, this.selectedBook);
    },
    handleResetEdit() {
        this.selectedBook = null;
        this.bookForm = {};
    }

     },

     created() {
         this.fetchBookData();
     }

   }
   Vue.createApp(SomeApp).mount('#booksApp');
