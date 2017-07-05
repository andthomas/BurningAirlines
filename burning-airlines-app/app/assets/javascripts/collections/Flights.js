
var app = app || {};

console.log('collections/Flights.js loading')

app.Flights = Backbone.Collection.extend({
<<<<<<< HEAD
  // url: "",
    url: "/flights",
  model: app.Flights,


=======
  url: "/flights",
  model: app.Flight,
>>>>>>> e01867184dae337ec20b7bd1570815020ad042fa

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
