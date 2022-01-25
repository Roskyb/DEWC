import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	appMessage = 'Esperando jugada...'
	options = ['rock', 'paper', 'scissors',]
	map: any = {};
	score: number[] = [0,0]
	constructor() {

	}

	chooseOption(option: string) {
		let playerOption: string = option
		let npcOption: string = this.options[Math.floor(Math.random() * this.options.length)]
		this.processGame(playerOption, npcOption)

	}

	processGame(playerOption: string, npcOption: string) {

		this.options.forEach((choice, i) => {
			this.map[choice] = {};
			this.map[choice][choice] = "empate"
			this.map[choice][this.options[(i + 1) % 3]] = this.options[(i + 1) % 3]
			this.map[choice][this.options[(i + 2) % 3]] = choice
		})

		console.log()
		let resultado: string = this.compare(playerOption, npcOption)
		if(resultado === 'empate'){
			this.appMessage = `Habéis elegido la misma herramienta ${playerOption} y habéis empatado`
		}else if(resultado === playerOption) {
			this.appMessage = `Ganas al NPC con ${playerOption} que útilizo ${npcOption}`
			this.score[0]++
		}else {
			this.appMessage = `Ganas el NPC con ${npcOption} contra tu ${playerOption}`
			this.score[1]++

		}

	}

	compare(choice1: string, choice2: string) {
		return (this.map[choice1] || {})[choice2] || "Invalid choice";
	}


}


