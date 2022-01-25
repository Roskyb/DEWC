import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatSnackBarModule,
	MatDialogModule,
	MatInputModule,
	MatFormFieldModule,

  ],
  exports: [
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatDialogModule,
	MatInputModule,
	MatFormFieldModule,
  ]
})
export class MaterialModule { }
