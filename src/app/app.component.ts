import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/types';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	users: User[] = [];

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.http
			.get<User[]>('/api/users')
			.subscribe((users) => (this.users = users));
	}
}
