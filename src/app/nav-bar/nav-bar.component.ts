import { Component } from '@angular/core';
import {
	faHome,
	faAddressBook,
	faCheck,
	faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
	isOpen = JSON.parse(localStorage.getItem('isOpen') as string) || false;

	linkData = [
		{ name: 'Home', href: '/', icon: faHome },
		{ name: 'About', href: '/about', icon: faCircleInfo },
		{ name: 'Contact', href: '/contact', icon: faAddressBook },
		{ name: 'Hired', href: '/hired', icon: faCheck },
	];

	toggleNav() {
		this.isOpen = !this.isOpen;

		localStorage.setItem('isOpen', this.isOpen as string);
	}
}
