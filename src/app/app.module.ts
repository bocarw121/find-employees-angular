import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee/employee.component';
import { HiredComponent } from './hired/hired.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		HomeComponent,
		EmployeesComponent,
  EmployeeComponent,
  HiredComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NavLinkComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
