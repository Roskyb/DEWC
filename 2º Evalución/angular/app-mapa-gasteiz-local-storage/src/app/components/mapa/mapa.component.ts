import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from 'src/app/models/marcador';
import { MapaEditarComponent } from '../mapa-editar/mapa-editar.component';
@Component({
	selector: 'app-mapa',
	templateUrl: './mapa.component.html',
	styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

	marcadores: Marcador[] = []

	lat = 51.678418
	lng = 7.809007

	constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {
		if (localStorage.getItem('marcadores')) {
			this.marcadores = JSON.parse(localStorage.getItem('marcadores') || '{}')
		}


	}

	agregarMarcador(e: any) {
		this.marcadores.push(new Marcador(e.coords.lat, e.coords.lng))
		this.guardarStorage()
	}

	guardarStorage() {
		localStorage.setItem('marcadores', JSON.stringify(this.marcadores))
		this.snackBar.open('Marcador guardado', 'Cerrar', {duration: 3000})

	}

	borrarMarcador(i: number) {
		this.marcadores.splice(i, 1)
		this.guardarStorage()
		this.snackBar.open('Marcador Borrador', 'Cerrar')
	}

	editarMarcador(i: number) {
		const dialogRef = this.dialog.open(MapaEditarComponent, {
			width: '250px',
			data: { titulo: this.marcadores[i].title, desc: this.marcadores[i].desc }
		})

		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialogo cerrado')

			if(!result) return 
			this.marcadores[i].title = result.titulo
			this.marcadores[i].desc = result.desc

			this.guardarStorage()
		})
	}

	ngOnInit(): void {
	}

}
