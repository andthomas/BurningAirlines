var app = app || {};
app.appView = Backbone.View.extend({
  el: "#app",

  render: function(){

    template = $('#AppViewTemplate').html();
    this.$el.html( template );

    this.collection.each(function(flight){
      flv = new app.FlightListView({
        model: flight
      });
      flv.render();
    });

    console.log('AppView rendered')

  }
});
