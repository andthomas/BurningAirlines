_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

var app = app || {};

console.log('main.js loading...');

// Create instance of router for the whole app
app.router = new app.AppRouter();

app.flights = new app.Flights();

app.reservations = new app.Reservations();

$(document).ready(function(){


  Backbone.history.start();

  app.flights.fetch();


  // window.setInterval(function(){
  //   app.flights.fetch();
  // }, 2000);

});
