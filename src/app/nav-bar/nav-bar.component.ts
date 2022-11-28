import { Component } from '@angular/core';
import {
	faHome,
	faAddressCard,
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
		{ name: 'Register', href: '/register', icon: faAddressCard },
		{ name: 'About', href: '/about', icon: faCircleInfo },
		{ name: 'Hired', href: '/hired', icon: faCheck },
	];

	toggleNav() {
		this.isOpen = !this.isOpen;

		localStorage.setItem('isOpen', this.isOpen as string);
	}
}
