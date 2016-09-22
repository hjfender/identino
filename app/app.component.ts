import { Component } from '@angular/core';

declare var sigma:any;

@Component({
	selector: 'my-app',
	template: `
		<div class="form-group">
			<input [(ngModel)]="search_term" class="form-control" id="search_bar" placeholder="Search">
			<br>
			<button (click)="clicked()" class="btn btn-primary">Search</button>
		</div>
	`
})
export class AppComponent {
	title = 'Identino Search';
	search_term = '';

	clicked() {
		(<any>$('#idea_map_modal')).modal('show');
		(<any>$('#change-me')).text("Identified Connections for " + this.search_term);
	}
}