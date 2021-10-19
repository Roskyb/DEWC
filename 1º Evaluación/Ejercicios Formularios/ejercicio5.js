const checkDNI = () => {
	let dni = document.getElementById('dni').value
	if (!/^\d{8}[A-Z]$/.test(dni)) return false
	const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
		'H',
		'L',
		'C', 'K', 'E', 'T')
	let split = dni.split()
	let num = dni.slice(0, split.length - 2)
	let letra = dni[dni.length - 1]
	return letra == letras[num % 23]
}


const comprobarEmail = () => {
	let email = document.getElementById('email').value
	return /\S+@\S+\.\S+/.test(email)
}

const comprobarCodigoPostal = ()  => {
	let postal = document.getElementById('postal').value
	return /\b\d{5}\b/.test(postal)
}

const comprobarFecha = () => {
	let fecha = document.getElementById('fecha').value
	console.log(fecha)
	let date1 = new Date(fecha)
	return date1 == 'Invalid Date'

}
comprobarFecha()

document.addEventListener('submit', (e) => {
	e.preventDefault()
	if (!checkDNI()) return
	if(!comprobarEmail) return
	if(!comprobarCodigoPostal()) return 
	if(!comprobarFecha()) return
	alert('El formulario es correcto')
})