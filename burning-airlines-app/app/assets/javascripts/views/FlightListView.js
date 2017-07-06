var app = app || {};

app.FlightListView = Backbone.View.extend({

  // el: "#flightsTable",
  tagName: "tr",

  render: function(){
    // console.log('FLV running')
    // debugger;

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate )

    var markup = template( this.model.attributes );
    this.$el.html( markup );
    this.$el.appendTo( "#flightsTable" );
    console.log(markup);
    console.log("flightsTable:", $("#flightsTable")  );

  },
  events: {
    "click": "showFlight"
  },
  showFlight: function(){
    var id =this.model.get("id");
    // debugger;
    console.log(this.model.get("id"))
    app.router.navigate("flights/"+ id, true);
  }



});
