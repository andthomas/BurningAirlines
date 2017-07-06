var app = app || {};
console.log('main.js loading...');

_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

// Create instance of router for the whole app
app.router = new app.AppRouter();

app.airplanes = new app.Airplanes();

app.flights = new app.Flights();

// app.reservations = new app.Reservations();

$(document).ready(function(){

  Backbone.history.start();

  app.flights.fetch();

});
