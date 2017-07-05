var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: "/reservations",

  defaults: {
    user_id:"",
    seat_row:"",
    seat_column:""
  },

  initialize: function(){
    console.log("A new reservation was created.");
    // this.on("add", function( flight ){
    //   console.log('A reservation was added to the collection');
    //
    //   var reservationView = new app.FlightView({
    //     model: reservation
    //   });
    //
    //   reservationView.render();
  // });
}
});
