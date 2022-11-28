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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserCardComponent } from './user-card/user-card.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { BackButtonComponent } from './back-button/back-button.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		HomeComponent,
		EmployeesComponent,
		EmployeeComponent,
		HiredComponent,
		UserCardComponent,
		RegisterComponent,
		BackButtonComponent,
  AboutComponent,
  ContactComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		NavLinkComponent,
		FontAwesomeModule,
		BrowserAnimationsModule, // required animations module
		ToastrModule.forRoot(),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
