import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { RouteParams } from '@angular/router-deprecated';

import { Plan } from './plan';
import { SharedService } from './shared.service';

@Component({
	selector: 'estate-detail',
	templateUrl: 'app/estate-detail.component.html',
	styleUrls: ['app/estate-detail.component.css']
})
export class EstateDetailComponent implements OnInit {
	@Input() plan: Plan;
	@Output() close = new EventEmitter();
	error: any;
	navigated = false;

	constructor(
		private sharedService: SharedService,
		private routeParams: RouteParams) {
	}

	ngOnInit() {
		if (this.routeParams.get('id') !== null) {
			let id = +this.routeParams.get('id');
			this.navigated = true;
			this.sharedService.getPlan(id)
					.then(plan => this.plan = plan);
		} else {
			this.navigated = false;
			this.plan = new Plan();
		}
	}
	/*save() {
		this.sharedService
			.save(this.plan)
			.then(plan => {
				this.plan = plan;
				this.goBack(plan);
			})
			.catch(error => this.error = error);
	}*/
	goBack(savedEstate: Plan = null) {
		this.close.emit(savedEstate);
		if (this.navigated) { window.history.back(); }
	}
}