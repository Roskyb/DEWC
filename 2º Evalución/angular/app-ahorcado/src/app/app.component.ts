import { Component } from '@angular/core';
import { SecretWordService } from './services/secret-word.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	lives: number;
	abc: string[];
	secretWord: string;
	guessedLetters: string[];
	guessedWord: string[];
	img: number;
	winner: boolean
	constructor(private _secretWord: SecretWordService) {
		this.lives = 9;
		this.abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
		this.secretWord = this._secretWord.getSecretWord()
		this.guessedWord = this.secretWord.split('').map(e => '_')
		this.guessedLetters = []
		this.img = 0
		this.winner = false
	}


	tryLetter(letter: string) {
		if (this.secretWord.indexOf(letter) != -1) {
			if(!this.guessedLetters.find( e => e == letter)){
				this.guessedLetters.push(letter)
				this.guessedWord = this.secretWord.split('').map(e => this.guessedLetters.find(x => e==x) ? e : '_')
				console.log(this.guessedWord.join() === this.secretWord)
				console.log(this.guessedWord.join())
				if(this.guessedWord.join('') === this.secretWord) {
					
					this.winner = true
					console.log("ganaste")
				}
			}
		} else {
			this.lives--
			this.img++
		}
	}

}
