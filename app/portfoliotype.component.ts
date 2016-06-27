import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Plan } from './plan';
import { SharedService } from './shared.service';

@Component({
	selector: 'portfoliotype',
	templateUrl: 'app/portfoliotype.component.html',
	styleUrls: ['app/portfoliotype.component.css']
})
export class PortfolioTypeComponent implements OnInit {

	plans: Plan[] = [];
	selectedPlan = this.sharedService.getSelected();

	constructor(
		private router: Router,
		private sharedService: SharedService) {
	}

	ngOnInit() {
		this.sharedService.getPlans()
			.then(plans => this.plans = plans.slice(0, 4));
	}

	selectPlan(plan: Plan) {
		this.selectedPlan = plan;
	}

	continue() {
		this.sharedService.save(this.selectedPlan);
		this.router.navigate(['AboutYou']);
	}
}