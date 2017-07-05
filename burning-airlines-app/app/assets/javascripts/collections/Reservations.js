var app = app | {};

app.Planes = Backbone.Collection.extend({
  url: "/Planes",
  model: app.Reservation,

  initialize: function(  ){
    this.on("add", function( reservation ){
      console.log('A reservation was added to the collection');
      va reservationView = new app.ReservationView({
        model: reservation
      });
      reservationView.render();
    });
  } // init()

});
