import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-buscador',
	templateUrl: './buscador.component.html',
	styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

	heroes: Heroe[] = []
	term: string

	constructor(private activatedRoute: ActivatedRoute, _heroeService: HeroesService) {
		this.term = ""
		this.activatedRoute.params.subscribe(params => {
			this.term = params['term']
			this.heroes = _heroeService.serachHeroes(this.term)
		})
	}



	ngOnInit(): void {
	}

}
