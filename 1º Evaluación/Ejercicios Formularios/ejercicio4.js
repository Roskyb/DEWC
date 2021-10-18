const getLetraDNI = (numeros) => {
	const letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
		'H',
		'L',
		'C', 'K', 'E', 'T')

	let clave = numeros % 23
	return letras[clave]
}


const inputNombre = document.getElementById('nombre')
const inputDNI = document.getElementById('dni')
const inputLetra = document.getElementById('letra')
const inputOpinion = document.getElementById('opinion')
const inputMaxChar = document.getElementById('maxChar')
const radioSexo = document.getElementsByName('sexo')
const radioSueldo = document.getElementsByName('sueldo')
const inputFichero = document.getElementById('fichero')
const selectProvincia = document.getElementById('provincia')
const selectHobbys = document.getElementById('hobbys')



const comprobacionDNI = () => {
	if (inputDNI.value.length != 8) {
		alert('El DNI deve tener 8 caracteres de longitud!')
		inputDNI.focus()

	} else {
		inputLetra.value = getLetraDNI(inputDNI.value)
		inputLetra.classList.add('bg-success')
	}
}

const limitarOpinion = () => {
	if(inputOpinion.value.length >= inputMaxChar.value){
		console.log('perro')
		inputOpinion.value = inputOpinion.value.slice(0, inputMaxChar.value)
	}
}

const comprobarMaxChar =  () => {
	if(isNaN(inputMaxChar.value)) {
		alert('El maximo de caracteres deve ser un número')
		inputMaxChar.value = ''
		inputMaxChar.focus()
	}
	
}

const comprobarFormulario = () => {
	if(inputNombre.value.length == 0) return false
	if(inputDNI.value.length < 8) return false
	let radioSelected = false
	radioSexo.forEach(e => e.checked ? radioSelected = true : 0)
	if(!radioSelected) return false 
	if(selectProvincia.selectedIndex == 0) return false
	return true
}

window.onload = () => {
	inputNombre.focus()
	inputLetra.readOnly = true
	inputDNI.addEventListener('blur', comprobacionDNI)

	inputMaxChar.addEventListener('change', comprobarMaxChar)

	inputOpinion.addEventListener('input', limitarOpinion)

	radioSueldo.forEach(e => e.value =='de 10000€ a 20000€' ? e.checked = true : 0)


	document.getElementById('enviar').addEventListener('click', (e) => {
		if(comprobarFormulario()){
			alert('todo bien')
		}else alert('todo mal')

		e.preventDefault()
	})
}