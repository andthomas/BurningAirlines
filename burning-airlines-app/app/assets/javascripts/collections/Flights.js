var app = app | {};

app.Flights = Backbone.Collection.extend({
  url: "",
  model: app.Flights,

  initialize: function( ){
    this.on("add", function( flight ){
      console.log('A flight was added to the collection');
      va flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
    });
  } // init()

});
