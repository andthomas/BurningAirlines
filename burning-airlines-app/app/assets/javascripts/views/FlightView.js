var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",
  render: function(){
    console.log( this.model )
    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    this.$el.html( markup );
  }
});
