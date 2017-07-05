var app = app || {};

console.log('collections/Flights.js loading')

app.Flights = Backbone.Collection.extend({
  // url: "",
    url: "/flights",
  model: app.Flights,



  initialize: function(){


    this.on("add", function( flight ){
      console.log('A flight was added to the collection');

      var flightListView = new app.FlightListView({
        model: flight
      });

      flightListView.render();
    });
  } // init()

});
