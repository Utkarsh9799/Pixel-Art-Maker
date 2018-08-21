// Select color input


// Selecting size input
$('#size').on('click', function(){
	$('tr').remove();
	var row = $('#row').val();
	var column =$('#column').val();
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
}