/* eslint-disable no-undef */
(function () {
	// listener del submit
	$('#frmData').on('submit', function (e) {

		e.preventDefault()
		var formulario = $(this)
		var dataSerializada = formulario.serialize()

		swal({
			title: 'Añadir nuevo alumno',
			text: 'Estas seguro de añadir un nuevo alumno',
			icon: 'success',
			buttons: true
		}).then(is_confirm => {
			if(!is_confirm) return 
			$.ajax({
				type: 'POST',
				url: 'php/servicios/post.alumnos.php',
				dataType: 'json',
				data: dataSerializada
			})
				.done(function (data) {
					swal('Usuario añadido correctamente')
					console.log('Correcto!')
					console.log(data) // Se imprime en consola la api
				})
				.fail(function () {
					swal('Fallo al añadir el usuario')
				})
		})

		



	})

})()