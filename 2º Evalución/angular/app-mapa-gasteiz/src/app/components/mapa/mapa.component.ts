import { Component, OnInit } from '@angular/core';
import listaDeCapitales from 'src/assets/json/datoscapitales.json';

@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

	

	capitales: any = listaDeCapitales
	lat = 43;
	lng = -2;
	previusInfoWindow: any = null
	infoWindowOpened: any = null

	constructor() {
	}

	selectMarker(infoWindow: any){
		if(this.previusInfoWindow === null){
			this.previusInfoWindow = infoWindow
		}else{
			this.infoWindowOpened = infoWindow
			this.previusInfoWindow.close()

		}
		this.previusInfoWindow = infoWindow
	}

	ngOnInit(): void {
		
	}

}
