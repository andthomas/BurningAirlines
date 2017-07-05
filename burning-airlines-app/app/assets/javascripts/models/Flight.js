var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: "/flights",

  defaults: {
      date: "",
      flight_no: "",
      origin: "",
      destination: "",
      plane: ""
  },

  initialize: function(){
    console.log("A new flight was created.");
  }
});
