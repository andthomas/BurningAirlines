
var app = app || {};

app.FlightView = Backbone.View.extend({
  el: "#app",
  render: function(){

    debugger;
    console.log( this.model.attributes )
    console.log('FlightView');
    // debugger;
    var rawTemplate = $("#ReservationViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );

    console.log( this.model.attributes )

    this.$el.html( markup );

    rows = this.model.attributes.airplane.rows;
    cols = this.model.attributes.airplane.columns;

    // _.each(rows, function(r){
    //   $('<tr>').appendTo('#table')
    // })
    // _.each(cols, function(c){
    //   $('<td>').appendTo('#table')
    // })

  //   mytable = $('<table></table>').attr({ id: "basicTable" });
	// // var rows = new Number($("#rowcount").val());
	// // var cols = new Number($("#columncount").val());
  // //
  //
  //
  // table = $('<table></table>').attr({ id: "basicTable" });
  // var rows = new Number($("#rowcount").val());
	// var cols = new Number($("#columncount").val());
  //
  //
  // 	var tr = [];
  // 	for (var i = 0; i < rows; i++) {
  // 		var row = $('<tr></tr>').attr({ class: ["class1"].join(' ') }).appendTo(table);
  // 		for (var j = 0; j < cols; j++) {
  // 			$('<td></td>').text("text1").appendTo(row);
  // 		}
  //
  // 	}
  //



  }
});
