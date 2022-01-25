import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-mapa-editar',
	templateUrl: './mapa-editar.component.html',
	styleUrls: ['./mapa-editar.component.scss']
})
export class MapaEditarComponent implements OnInit {

	forma: FormGroup

	constructor(
		public dialogRef: MatDialogRef<MapaEditarComponent>,
		@Inject(MAT_DIALOG_DATA) public data:any,
		public fb: FormBuilder,
	) {
		console.log(data)
		this.forma = fb.group({
			'titulo': data.titulo,
			'desc': data.desc
		})
	}

	guardarCambios(){
		this.dialogRef.close(this.forma.value)
		
	}


	onNoClick():void {
		this.dialogRef.close()
	}
	ngOnInit(): void {


	}

}
