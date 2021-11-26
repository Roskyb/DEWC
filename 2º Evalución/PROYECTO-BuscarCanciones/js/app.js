let btnEnviar = document.querySelector('.enviar')

const  buscarCancion = async (inputArtista, inputCancion) => {
	let loader = parseTextToNode(`<div class="spinner-border text-primary" role="status">
	<span class="sr-only">Loading...</span></div>`)
	let container = document.querySelector('.letra-resultado')
	container.appendChild(loader)
	fetch(`https://api.lyrics.ovh/v1/${inputArtista}/${inputCancion}`)
		.then(response => response.json())
		.then(response => {
			if (response.error) {
				document.getElementById('resultado').innerHTML = `
				<div class="alert alert-danger" role="alert">
					No se ha encontrado la cancion que buscabas!
				</div>`
				document.getElementById('titulo-cancion').innerHTML = ''

			} else {
				document.getElementById('resultado').innerHTML = response.lyrics
				document.getElementById('titulo-cancion').innerHTML = inputCancion
				loader.remove()
			}
		})
}

const parseTextToNode = (nodeString) => {
	let doc = new DOMParser().parseFromString(nodeString, 'text/html')
	return doc.body.firstChild
}
const limpiarErrores = () => {
	document.querySelectorAll('p.text-warning').forEach(e => e.remove())
}


btnEnviar.addEventListener('click', async (e) => {
	e.preventDefault()
	let inputArtista = document.getElementById('artista')
	let inputCancion = document.getElementById('cancion')

	if (!inputArtista.value) {
		let elementArtista = document.getElementById('artista')
		let errorMsg = parseTextToNode('<p class="text-warning">Deves introducir un autor</p>', 'text/html')
		elementArtista.parentElement.appendChild(errorMsg)
		return

	}
	if (!inputCancion.value) {
		let elementArtista = document.getElementById('cancion')
		let errorMsg = parseTextToNode('<p class="text-warning">Deves introducir una cancion</p>', 'text/html')
		elementArtista.parentElement.appendChild(errorMsg)
		return
	}

	limpiarErrores()

	buscarCancion(inputArtista.value, inputCancion.value)





})