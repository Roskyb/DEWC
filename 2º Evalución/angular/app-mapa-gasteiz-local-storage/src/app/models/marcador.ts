export class Marcador {

	lat: number
	lng: number
	title: String = 'Sin titulo'
	desc: String = 'Sin descripcion'

	constructor(lat: number, lng: number) {
		this.lat = lat
		this.lng = lng
	}
}
