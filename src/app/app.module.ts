import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';

@NgModule({
	declarations: [AppComponent, NavBarComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		NavLinkComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
