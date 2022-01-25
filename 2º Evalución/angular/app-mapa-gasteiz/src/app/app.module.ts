import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';


@NgModule({
	declarations: [
		AppComponent,
		MapaComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyDY3YQ6aNb7YXoz13RIxq5fVyzdbak7sQ0'
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
