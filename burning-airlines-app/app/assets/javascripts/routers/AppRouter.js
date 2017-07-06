var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'search',
    'flights/:id': 'showFlight',

  },
  search: function(){
    console.log('Navigated to default route search');
    var appView = new app.appView({
      collection: app.flights
    });

    appView.render();
  },
  showFlight: function( id ){
    console.log('flight id',id);
    var flight = app.flights.get( id );
    var fv = new app.FlightView({
      model: flight
  });
    fv.render();
  }
});
