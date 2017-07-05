
var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#reservationsTable",
  render: function(){

    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    this.$el.html( markup );
  }
});
