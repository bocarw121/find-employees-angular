import { HiredComponent } from './hired/hired.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'employees/:id',
		component: EmployeeComponent,
	},
	{
		path: 'hire/:id',
		component: HireEmployeeComponent,
	},
	{
		path: 'hired',
		component: HiredComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
