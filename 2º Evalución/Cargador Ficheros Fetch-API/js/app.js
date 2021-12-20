const resultado = document.querySelector('#resultado')

const txtBtn = document.querySelector('#txtBtn')
const jsonBtn = document.querySelector('#jsonBtn')
const apiBtn = document.querySelector('#apiBtn')

function generateTable(data) {
	let table = document.createElement('table')
	let thead = table.createTHead()
	let row = thead.insertRow()

	for (let key of data) {
		
		for (var property in key) {
			let th = document.createElement('th')
			let text = document.createTextNode(property)
			th.appendChild(text)
			row.appendChild(th)
		}

		break
	}

	for (let element of data) {
		let row = table.insertRow()
		for (let key in element) {
			let cell = row.insertCell()
			let text = document.createTextNode(element[key])
			cell.appendChild(text)
		}
	}

	return table
}

txtBtn.addEventListener('click',() => {
	fetch('datos.txt')
		.then(data => data.text())
		.then(res => {
			if (!res) return
			let arr = res.split(' ')
			resultado.innerHTML = ''
			resultado.innerHTML += '<ul>'
			arr.forEach(e => {
				resultado.innerHTML += `<li>${e}</li>`
			})
			resultado.innerHTML += '</ul>'
		})
})

jsonBtn.addEventListener('click',() => {
	fetch('empleados.json')
		.then(data => data.json())
		.then(async res => {

			if (!res) return
			console.log(res)
			resultado.innerHTML = ''
			resultado.appendChild(generateTable(res))
		})
})

apiBtn.addEventListener('click', () => {
	fetch('https://picsum.photos/v2/list?limit=20')
		.then(data => data.json())
		.then(res => {
			resultado.innerHTML = ''
			res.forEach(e => {
				let img = new Image(100, 100)
				img.src = e.download_url
				resultado.appendChild(img)
			})
		})
})

