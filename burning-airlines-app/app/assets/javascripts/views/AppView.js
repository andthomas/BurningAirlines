var app = app || {};
app.appView = Backbone.View.extend({
  el: "#app",

  render: function(){

    var template = $('#AppViewTemplate').html();
    this.$el.html( template );

    // this.collection.each(function(flight){
    //   var flv = new app.FlightListView({
    //     model: flight
    //   });
    //   flv.render();
    // });

    console.log(app.flights)

    console.log('AppView rendered')

  }
});
