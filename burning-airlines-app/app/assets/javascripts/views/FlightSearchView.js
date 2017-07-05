var app = app || {};

app.flightSearchView = Backbone.View.extend({
  el:"#flightSearch",
  events: {
    "click .serach": "searchFlight",
    "click .cancel": "cancel",
    "click .save": "save"
  },
  searchFlight: function(){
    var userInputFrom = this.$el.find("#tb1").val();
    console.log(userInputFrom);
    var userInputTo = this.$el.find("#tb2").val();
    console.log(userInputTo);
  }
  // var serchedFlightFrom = this._.filter(function(flight){
  //   return flight.attributes.origin;
  // });
  // serchedFlightTo
  // var serchedFlightTo = this._.filter(function(flight){
  //   return flight.attributes.destination;
  // });

  var flightFind = _.filter(app.flights.models, function(f){
    // if f.
  })


});
