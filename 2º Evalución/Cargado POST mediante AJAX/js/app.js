const cargarLista2 = () => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => {
			let lista = document.querySelector('#listado2')
			let res = json
			console.log(json)
			res.forEach(el => {
				let { userId, id, title } = el
				lista.innerHTML += `<ul>
										<li>${userId}</li>
										<li>${id}</li>
										<li>${title}</li>
									</ul>`
			})
		})

}



const cargarLista1 = () => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => {
			let lista = document.querySelector('#listado')
			let res = json
			console.log(json)

		

			res.forEach(el => {
				let { id, name, username } = el
				lista.innerHTML += `<ul>
										<li>${id}</li>
										<li>${name}</li>
										<li>${username}</li>
									</ul>`
			})
		})
}

cargarLista1()
cargarLista2()