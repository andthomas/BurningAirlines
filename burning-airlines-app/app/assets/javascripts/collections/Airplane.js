var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: "/airplanes",
  model: app.Airplane,

  initialize: function(){
    this.on("add", function( airplane ){
      console.log('An airplane was added');
    })
  }
});
