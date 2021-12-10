/* eslint-disable no-undef */
const baseUri = 'php/'
const frm = document.getElementById('frm')

const btnRegistrar = document.querySelector('#registrar')

btnRegistrar.addEventListener('click', (e) => {
	e.preventDefault()
	fetch(baseUri + 'registrar.php', {
			method: 'POST',
			body: new FormData(frm)
		}).then(res => res.text())
		.then(res => {
			if (res != 'ok' && res != 'modificado') return
			Swal.fire({
				icon: 'success',
				title: 'Registrado',
				showConfirmButton: false,
				timer: 1500,
			})
			frm.reset()
			cargarListado()
			registrar.value = 'Registrar'
		})

})

const cargarListado = (busqueda) => {
	fetch(baseUri + 'listar.php', {
			method: 'POST',
			body: busqueda
		})
		.then(res => res.text())
		.then(res => document.getElementById('resultado').innerHTML = res)

}

// eslint-disable-next-line no-unused-vars
const Eliminar = (id) => {
	Swal.fire({
			title: 'Esta seguro de eliminar?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si!',
			cancelButtonText: 'NO'
		})
		.then(result => {
			if (!result.isConfirmed) return
			fetch(baseUri + 'eliminar.php', {
					method: 'POST',
					body: id,
				})
				.then(res => res.text())
				.then(res => {
					if (res == 'ok') {
						cargarListado()
						Swal.fire({
							icon: 'success',
							title: 'Eliminado',
							showConfirmButton: false,
							timer: 1500,
						})
					}


				})

		})
}


const Editar = (id) => {
	fetch(baseUri + 'editar.php', {
			method: 'POST',
			body: id,
		}).then(res => res.json())
		.then(res => {
			idp.value = id
			codigo.value = res.codigo
			producto.value = res.producto
			precio.value = res.precio
			cantidad.value = res.cantidad
			registrar.value = 'Actualizar'
		})
}
cargarListado()

const search = document.getElementById('search')

search.addEventListener('keyup', () => {
	let searchStr = search.value
	if (searchStr == '') cargarListado()
	else cargarListado(searchStr)
})