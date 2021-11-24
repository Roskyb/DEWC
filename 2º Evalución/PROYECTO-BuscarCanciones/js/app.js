let btnEnviar = document.querySelector('.enviar')

btnEnviar.addEventListener('click', (e) => {
	e.preventDefault()
	let inputArtista = document.getElementById('artista') 
	let inputCancion = document.getElementById('cancion')

	if(!inputArtista) return
	if(!inputCancion) return 

	fetch(`https://api.lyrics.ovh/v1/${inputArtista.value}/${inputCancion.value}`)
		.then(response => response.json())
		.then(response => {
			if(response.error) document.getElementById('resultado').innerHTML = '<p class="text-warning">No se han encontrado resultados</p>'
			else {
				document.getElementById('resultado').innerHTML = response.lyrics
			}
		})

})