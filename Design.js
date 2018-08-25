//Selecting colour, number of rows and columns input
var col = $('#color').val();

//Making the grid
$('#size').on('click', function(){
	var row = $('#row').val();
	var column =$('#column').val();
	$('tr').remove();
	$('button').remove();
	makeGrid(row,column);
});

function makeGrid(r,c) {
	for(var i = 0; i < r; i++){
		$('#canvas').append("<tr></tr>");
		for(var j = 0; j < c ; j++){
			$('tr:last').append("<td></td>");
		}
		event.preventDefault();
	}
	$('body').append("<button>Reset</button>");
	$('button').attr('id', 'reset');
}

//Filling the cells with the colour
$('body').on('click', 'td', function (){
	var col = $('#colourPicker').val();
	if($(this).attr('style'))
		$(this).removeAttr('style');
	else
		$(this).css('background-color', col);

});

//Reset button
$('body').on('click', '#reset', function(){
	$('td').removeAttr('style');
});