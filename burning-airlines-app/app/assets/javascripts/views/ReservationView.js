<<<<<<< HEAD
var app = app || {};

// This view's responsibility is to:
// - Create a new list item (<li>)
// - Set its text to be the content of the model that was set as the model for this view
// - Prepend the item to #secrets

app.ReservationView = Backbone.View.extend({
  tagName: "tr",

  render: function(){

    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    this.$el.html( markup );
  }
});
=======
// var app = app || {};
//
// // This view's responsibility is to:
// // - Create a new list item (<li>)
// // - Set its text to be the content of the model that was set as the model for this view
// // - Prepend the item to #secrets
//
// app.ReservationView = Backbone.View.extend({
//   tagName: "tr",
//
//   render: function(){
//
//   }
// });
>>>>>>> e01867184dae337ec20b7bd1570815020ad042fa
