var app = app || {};
app.appView = Backbone.View.extend({
  el: "#app",

  render: function(){

    rawTemplate = $('#AppViewTemplate').html();
    this.$el.html( rawTemplate );
    console.log('App View RENDERED TEMPLATE');

    var planeInputView = new app.planeInputView();
    planeInputView.render();
  }
});
