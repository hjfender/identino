import { Component } from '@angular/core';

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
	search_term = "";
	clicked() {
		$('#idea_map_modal').modal('show');
	}
}