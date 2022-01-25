import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	public heroes: Heroe[] = [];


	constructor(private _heroesService: HeroesService) {
		this.heroes = _heroesService.getHeroes()
	}

	ngOnInit(): void {

	}

}
