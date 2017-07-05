var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'initializeFilghts'
  },
  initializeFilghts: function(){
    console.log('Navigated to default route initializeFlights ()');
    var appView = new app.appView();
    appView.render();
  }
});
