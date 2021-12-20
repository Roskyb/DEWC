const selectProvincias = document.querySelector('#provincia')
const selectMunicipios = document.querySelector('#municipio')

const cargarProvincias = () => {
	var xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let res = JSON.parse(this.responseText)
			selectProvincias.innerHTML = ''
			selectProvincias.appendChild(new Option('- Seleccione una pronvincia - ',-1))
			for (const prov in res) {
				selectProvincias.appendChild(new Option(res[prov],prov))

			}
			selectProvincias.addEventListener('change', () => {
				cargarMunicipios(selectProvincias.value)
			})

		}
	}
	xhttp.open('POST','cargarJSON.php',true)
	xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
	xhttp.send('tipo=provincia')

}

const cargarMunicipios = (codProvincia) => {

	var xhttp = new XMLHttpRequest()
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let res = JSON.parse(this.responseText)
			selectMunicipios.innerHTML = ''
			selectMunicipios.appendChild(new Option('- Seleccione una municipio - ',-1))
			for (const prov in res) {
				selectMunicipios.appendChild(new Option(res[prov],prov))
			}
			selectMunicipios.addEventListener('change', () => {
				let muni = document.querySelector('#municipio')[document.querySelector('#municipio').selectedIndex].text
				let prov = document.querySelector('#provincia')[document.querySelector('#provincia').selectedIndex].text
				document.querySelector('#mensaje').innerHTML = `Has elegido la provincia de <strong>${prov}</strong> y el municipio de <strong>${muni}</strong> `
			})


		}
	}
	xhttp.open('POST','cargarJSON.php',true)
	xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded')
	xhttp.send('codigo_provincia=' + codProvincia + '&tipo=municipio')
}

cargarProvincias() 