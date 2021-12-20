/* eslint-disable no-undef */

function $_GET(param) {
	let vars = {}
	window.location.href.replace(location.hash,'')
		.replace(/[?&]+([^=&]+)=?([^&]*)?/gi,
			function (m,key,value) {
				vars[key] = value !== undefined ? value : ''
			})

	if (param) return vars[param] ? vars[param] : null
	return vars
}

(function () {

	$(document).ready(function () {
		const id = $_GET('id')
		$.ajax({
			type: 'GET',
			url: 'php/servicios/get.alumnos.php?id=' + id,
			dataType: 'json'
		}).done((res) =>{
			let alum = res.alumnos[0]
			$('#txtnombre').val(alum.nombre)
			$('#txtid').val(alum.id)
			$('#cmbestado').val(alum.estado)

		}).fail(() => console.log('ERROR!'))


		const actualizarAlumno = (data) => {
			$.ajax({
				type: 'POST',
				url: 'php/servicios/post.guardaralumno.php',
				data: data
			})
				.done(function (data) {

					console.log('Correcto!')

					console.log(data) // Se imprime en consola la api

					if (data.error) {
						alert('Algo raro pasó')
						return
					}

					swal('Actualizado correctamente!', '', 'success')


				})
				.fail(function (xhr) {
					alert(xhr.responseText)
				})
		}

		$('#btnGuardar').click(function (e) {
			e.preventDefault()
	
			let data = $('#frmData').serialize()
			console.log(data)
			actualizarAlumno(data)
		})
	})

})()