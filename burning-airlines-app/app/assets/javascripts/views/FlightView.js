var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",

  render: function(){

    console.log( this.model.attributes )

    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );
    var markup = template( this.model.attributes );

    var totalRows = this.model.attributes.airplane.rows;
    var totalCols = this.model.attributes.airplane.columns;
    var rows = _.range(1, totalRows+1);
    var cols = _.range(1, totalCols+1);

    var seatingPlan = $("<table class='seatingplan'/>").css({
            'border':"1px solid black",
            "max-width" :"800px"
    });

    _.each(rows, function(r){
      var $row = $("<tr>");
      $row.appendTo(seatingPlan);
      _.each(cols, function(c){
        var $col = $("<td class='seat'>").css({
                  'border':"1px solid black",
                  "width" : "40px",
                  "height" : "50px"
                });
        $col.appendTo($row);
      });
    });
    this.$el.html( markup );
    this.$el.append( seatingPlan );
    //
    // $(document).on('click', 'td', function(){
    // var selectedSeat = app.flights.fetch();
    // _.each(selectedSeat.responseJSON, function(num){
    //    _.each(num.reservations, function(reservation){
    //          console.log( "seat num:", reservation.seat_col);
    //      });
    //   });
    // });
  },

  events: {
    "click td": "seatSelect"
  },

  seatSelect: function(){
    console.log('cliqued')
  }



});
