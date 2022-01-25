import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html',
	styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

	frase: any = {
		mensaje: 'Un gran poder conlleva una gran resposabilidad',
		autor: 'Ben Parker',
	}
	mostrar: boolean = true;
	personajes: string[] = ['Spiderman', 'Hulk', 'Daredevil', 'Thor']

	constructor() { }

	ngOnInit(): void {
	}

}
