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
    var id = this.model.get("id");
    app.router.navigate("flights/"+ id, true);
  }
});
