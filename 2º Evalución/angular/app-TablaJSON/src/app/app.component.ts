import { Component } from '@angular/core'
import postres from '../assets/json/postres.json'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	listaPostres: any = postres
	title = 'app-TablaJSON';
	constructor() {
	}
}
