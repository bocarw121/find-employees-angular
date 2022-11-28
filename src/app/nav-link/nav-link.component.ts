import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-nav-link',
	standalone: true,
	imports: [CommonModule, RouterModule, FontAwesomeModule],
	templateUrl: './nav-link.component.html',
	styleUrls: ['./nav-link.component.css'],
})
export class NavLinkComponent {
	navSize = document.querySelector('header')?.clientWidth;
	@Input() linkData = {
		href: '',
		name: '',
		icon: '' as unknown as IconDefinition,
	};

	@Input() isOpen = false;
}
