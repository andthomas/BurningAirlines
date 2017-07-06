var app = app || {};

app.FlightListView = Backbone.View.extend({

  el: "#flightsTable",
  render: function(){
    console.log('FLV running')
    // debugger;

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate )

    var markup = template( this.model.attributes );
    this.$el.append( markup );

    console.log(this.model.attributes);

  },

  events: {
    "click": "showFlight"
  },
  showFlight: function(){
    // console.log('Reservation');
    var id = this.model.get("id");
    console.log(this.model);
    app.router.navigate("/flights/"+ id, true);
    // var rawTemplate = $('#ReservationViewTemplate').html();
    // var template = _.template( rawTemplate )
    //
    // var markup = template( this.model.attributes );
    // this.$el.append( markup );

    // console.log(this.model.attributes);



  }



});
