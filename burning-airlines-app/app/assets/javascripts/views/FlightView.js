
var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",
  render: function(){
    console.log('FlightView');
    // debugger;
    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    console.log( this.model.attributes )

    this.$el.html( markup );

    console.log( this.model.attributes.airplane.rows )
    console.log( this.model.attributes.airplane.columns )

  }
});
