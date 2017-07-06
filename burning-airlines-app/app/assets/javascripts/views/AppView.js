var app = app || {};
app.appView = Backbone.View.extend({
  el: "#app",

  events: {
    "click button": "searchFlight",
  },
  // 'click button': 'searchFlights',

  // render: function(){
  //
  //   var template = $('#AppViewTemplate').html();
  //   this.$el.html( template );
  //
    // var fsv = new app.FlightSearchView({
    //   model: flight
    // });
  //   fsv.render();
  //
  //   console.log('AppView rendered');
  //
  // },

  render: function(){
    var rawTemplate = $("#AppViewTemplate").html();
    this.$el.html(rawTemplate);

  },

  searchFlight: function(){

    var from = this.$el.find("#tb1").val();
    var to = this.$el.find("#tb2").val();
    console.log(from);
    console.log(to);

    var journeys = app.flights.models;

    // console.log(journeys)
    var result = _.filter(journeys, function(flight){
      return flight.get("origin") === from && flight.get("destination") === to;
      console.log(flight);
    });

    _.each(result, function(flight){
      var flv = new app.FlightListView({
        model: flight
      });
      flv.render();
    });


  }


});
