/* eslint-disable no-undef */
$('.img-thumbnail').on('mouseover', function () {
	let color = $(this).data('color')
	let url = `img/camiseta/large/${color}.jpg`
	console.log(color)
	$('#vistaPrevia').attr('src', url)
	$('#lblColor').text(color)
})