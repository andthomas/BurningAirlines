var app = app || {};

// _.templateSettings = {
//      evaluate : /\{\[([\s\S]+?)\]\}/g,
//      interpolate : /\{\{([\s\S]+?)\}\}/g
// };

app.router = new app.AppRouter();

app.flight = new app.Flights();



$(function(){
  app.flight.fetch().done(function(){
    Backbone.history.start();
  });
});
