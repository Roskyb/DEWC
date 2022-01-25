import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// GOOGLE MAPS IMPORTS
import { AgmCoreModule } from '@agm/core';
// MATERIAL IMPORTS
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa-editar/mapa-editar.component';


@NgModule({
	declarations: [
		AppComponent,
		MapaComponent,
  MapaEditarComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDY3YQ6aNb7YXoz13RIxq5fVyzdbak7sQ0'
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
