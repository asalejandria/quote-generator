// var app = document.getElementById("app")
// // app.innerText ="Hello, world"
// make request

// asssign variables
var but = $(".quote-button")

// text inside the button
but.text("Quote, please")

// on click, do this
but.click(() => {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
    Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    type: 'get',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    
    success: function(response) {
      // alert("SUCCESS")
      // $("#app").append(response[0].content)
      
      const obj = response[0]
      const quote = obj.quote
      const author = obj.author      
      console.log(response)
      displayQuote(quote, author);
    },
    error: function() {
      alert("ERROR")
    }
  })
})


function displayQuote(quote, author) {
  document.getElementById("quote-text").innerHTML = '"' + quote + '"'
  document.getElementById("quote-author").innerHTML = "– " + author
}