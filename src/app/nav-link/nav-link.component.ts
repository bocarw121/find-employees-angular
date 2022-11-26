import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-nav-link',
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: './nav-link.component.html',
	styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent {
	navSize = document.querySelector('header')?.clientWidth;
	@Input() linkData = {
		href: '',
		name: '',
	};

	@Input() isOpen = false;
}
