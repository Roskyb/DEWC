
const cargarMunicipios = (key) => {
	const uri = 'cargaMunicipiosJSON.php?nocache=' + Math.random()
	const init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: 'provincia=' + key
	}
	fetch(uri,init)
		.then(response => response.text())
		.then(data => {
			data = eval('(' + data + ')')

			const selectProvincia = document.querySelector('#municipio')
			selectProvincia.innerHTML = ''
			let def = new Option('- Selecciona un Municipio - ',-1,true)

			for (const key in data) {
				if (Object.hasOwnProperty.call(data,key)) {
					const el = data[key]
					selectProvincia.appendChild(def)
					let option = new Option(el,key)
					selectProvincia.appendChild(option)
				}
			}

		}).catch(err => console.log('puto error' + err))
}


const cargarProvincias = () => {
	const uri = 'cargaProvinciasJSON.php?nocache=' + Math.random()
	const init = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	}
	fetch(uri,init)
		.then(response => response.text())
		.then(data => {
			data = eval('(' + data + ')')

			const selectProvincia = document.querySelector('#provincia')
			selectProvincia.innerHTML = ''
			let def = new Option('- Selecciona una provincia - ',-1,true)

			for (const key in data) {
				if (Object.hasOwnProperty.call(data,key)) {
					const el = data[key]
					selectProvincia.appendChild(def)
					let option = new Option(el,key)
					selectProvincia.appendChild(option)
				}
			}

		})
}

const select = document.querySelector('#provincia')
select.addEventListener('focus',cargarProvincias)
select.addEventListener('change',() => {
	cargarMunicipios(select.value)
	document.querySelector('#municipio').addEventListener('change',() => {
		let muni = document.querySelector('#municipio')[document.querySelector('#municipio').selectedIndex].text
		let prov = document.querySelector('#provincia')[document.querySelector('#provincia').selectedIndex].text
		document.querySelector('#mensaje').innerHTML = `Has elegido la provincia de <strong>${prov}</strong> y el municipio de <strong>${muni}</strong> `
	})
})

