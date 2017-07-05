var app = app || {};




app.FlightView = Backbone.View.extend({
  tagName: "tr",
  render: function(){
    var date = this.model.get("date");
    this.$el.html(date);
    var flight = this.model.get("flight_no");
    this.$el.html(flight)
    var from = this.model.get("origin");
    this.$el.html(from);
    var to = this.model.get("destination");
    this.$el.html(to);
  }
});
