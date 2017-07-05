var app = app || {};

app.FlightListView = Backbone.View.extend({

  el: "#flightsTable",
  render: function(){
    console.log('FLV running')
    debugger;

    var rawTemplate = $('#FlightViewTemplate').html();
    var template = _.template( rawTemplate )

    var markup = template( this.model.attributes )
    this.$el.append( markup )

    console.log(this.model.attributes)
    // debugger;

    // console.log(this);
    // var date = this.model.get("date");
    // this.$el.html(date);
    // var flight = this.model.get("flight_no");
    // this.$el.html(flight);
    // var from = this.model.get("origin");
    // this.$el.html(from);
    // var to = this.model.get("destination");
    // this.$el.html(to);
    // this.$el.prependTo( "#flights"); // prepend add to top  append to the end
    // console.log(('el', this.$el));
  }
});
