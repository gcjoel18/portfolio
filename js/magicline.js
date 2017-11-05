//global variables
var magicLine;
var hoverItem;
var curremtItem;

function hoverMagicLine(){
	magicLine.stop().animate({
		left:  hoverItem.position().left,
		width: hoverItem.parent().width()  });
}

function returnMagicLine(){
	magicLine.stop().animate({
		left: magicLine.data("origLeft"),
		width:magicLine.data("origWidth")});
}


function recalibrateMagicLine(){
	magicLine.width(currentItem.outerWidth())
		.css("left", currentItem.position().left)
		.css("bottom" , -3.5)
		.data("origLeft", currentItem.position().left)
		.data("origWidth", currentItem.outerWidth());
}

function makeMagicLine(){
	$("#nav_ul").append("<li id='magic-line'></li>");
	magicLine 	 = $("#magic-line");
	currentItem  = $(".active");
	recalibrateMagicLine();
}


$(document).ready( function() {
	makeMagicLine();
	// on mouse hover, move magicLine
   	$("#nav_ul li").find('a').hover( function(){
   		hoverItem = $(this);
   		hoverMagicLine();
   	},  function(){
   		returnMagicLine();
   	});

   	$("#nav_ul li").click(function() {
   		currentItem.attr('class', '');
   		$(this).attr('class', 'active');
   		currentItem = $(this);
   		recalibrateMagicLine();
   	});
});


$(window).resize( function() {
   	recalibrateMagicLine();
});
