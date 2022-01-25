import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

	heroe: any = {};

	constructor(private activatedRoute: ActivatedRoute, _heroeService: HeroesService) {
		this.activatedRoute.params.subscribe(params => {
			this.heroe = _heroeService.getHeroe(params['id'])
		})
	}

	ngOnInit(): void {
	}

}
