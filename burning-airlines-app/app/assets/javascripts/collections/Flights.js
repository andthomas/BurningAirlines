
var app = app || {};

console.log('collections/Flights.js loading')

app.Flights = Backbone.Collection.extend({

  url: "/flights",
  model: app.Flight,


  initialize: function(){
    this.on("add", function( flight ){
      console.log('A flight was added to the collection');
    });
  } // init()

});
