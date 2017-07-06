var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: "/airplanes",

  defaults: {
      name: "",
      rows: "",
      columns: ""
  },

  initialize: function(){
    console.log("A new Airplane was created.");
  }
});
