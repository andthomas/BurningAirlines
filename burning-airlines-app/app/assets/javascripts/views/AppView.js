var app = app || {};
app.appView = Backbone.View.extend({
  el: "#app",

  render: function(){

    var template = $('#AppViewTemplate').html();
    this.$el.html( template );

    this.collection.each(function(flight){
      var flv = new app.FlightListView({
        model: flight
      });
      flv.render();
    });

    console.log('AppView rendered');

  },
  showFlight: function( id ){
    // $('#reservationsTable' ).show();
    // app.appFlights.fetch(function(){
    var flight = app.appFlights.get( id );
    // var user_id = app.appUsers.get( id );

  // });
    var fv = new app.FlightView({
      model: flight
    });
    rv.render();
  }
});
