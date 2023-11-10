
$(document).ready(function(){
});

$(window).resize(function(){
});

window.onload = function(){
}


$( function() {
	requestParameters();	
var sliderNum = 0;

$( "#value-1 > span" ).each(function() {
  var handle = $("#val-1> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});


$( "#value-2> span" ).each(function() {
  var handle = $("#val-2> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});


$( "#value-3 > span" ).each(function() {
  var handle = $("#val-3> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});


$( "#value-4 > span" ).each(function() {
  var handle = $("#val-4> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});


$( "#value-5 > span" ).each(function() {
  var handle = $("#val-5> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});


$( "#value-6 > span" ).each(function() {
  var handle = $("#val-6> #handle");
    $( this ).slider({
    value: 0,
    min: 0,
    max: 5000,
    animate: true,
    orientation: "horizontal",
    create: function() {
      handle.text( $( this ).slider("value") );
    },
    slide: function( event, ui ) {
      handle.text(ui.value);
    }
  });
});
	//$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});



setInterval(sendParameters,50);


  