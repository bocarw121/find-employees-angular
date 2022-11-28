import { AboutComponent } from './about/about.component';
import { HiredComponent } from './hired/hired.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'employees/:id',
		component: EmployeeComponent,
	},
	{
		path: 'hire/:id',
		component: RegisterComponent,
	},
	{
		path: 'hired',
		component: HiredComponent,
	},
	{
		path: '**',
		redirectTo: '',
		component: HomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
