<<<<<<< HEAD
var app = app || {};
console.log('main.js loading...');


=======
>>>>>>> e01867184dae337ec20b7bd1570815020ad042fa
_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};



// Create instance of router for the whole app
app.router = new app.AppRouter();

app.flights = new app.Flights();

// app.reservations = new app.Reservations();

$(document).ready(function(){


  Backbone.history.start();

  app.flights.fetch();
  app.reservations.fetch();

});
  // window.setInterval(function(){
  //   app.flights.fetch();
  // }, 2000);
