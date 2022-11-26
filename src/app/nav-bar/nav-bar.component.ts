import { Component } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
	isOpen = JSON.parse(localStorage.getItem('isOpen') as string) || false;
	linkData = [
		{ name: 'Home', href: '/' },
		{ name: 'Hired', href: '/hired' },
	];

	toggleNav() {
		this.isOpen = !this.isOpen;

		localStorage.setItem('isOpen', this.isOpen as string);
	}
}
