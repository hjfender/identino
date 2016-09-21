import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
			<div class="form-group">
				<input type="text" class="form-control" id="search_bar" placeholder="Search">
			</div>
	`
})
export class AppComponent {}