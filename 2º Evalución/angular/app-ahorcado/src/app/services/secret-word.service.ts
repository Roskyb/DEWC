import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SecretWordService {

	secretWords: string[] = [
		'OLVIDONAVIRUS',
		'FRANCISCO PIZARRO',
		'RECONQUISTA',
		'CULAMEN',
		'OLVIDONAVIRUS',
		'SERENDIPIA',
		'TESTAFERRO',
		'ZANGOLOTEAR',
	];
	constructor() {

	}

	getSecretWord(): string {
		return this.secretWords[Math.floor(Math.random()*this.secretWords.length)]
	}
}
