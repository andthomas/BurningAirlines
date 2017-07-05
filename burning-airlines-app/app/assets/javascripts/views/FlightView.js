
var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#reservationsTable",
  render: function(){
    console.log('FlightView');
    debugger;
    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    this.$el.html( markup );
  }
});
