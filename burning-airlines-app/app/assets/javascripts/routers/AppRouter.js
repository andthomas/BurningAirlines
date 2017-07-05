var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'search'
  },
  search: function(){
    console.log('Navigated to default route initializeFlights ()');
    var appView = new app.appView({
      collection: app.flights
    });
    appView.render();
  }
});
