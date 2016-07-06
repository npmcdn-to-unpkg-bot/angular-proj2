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
		this.income_now_src="./assets/non_hover/income_now.svg";
		this.target_date_income_src="./assets/non_hover/target_date_income.svg";
		this.wealth_build_src="./assets/non_hover/wealth_build.svg";
		this.wealth_protection_src="./assets/non_hover/wealth_protection.svg";
	}

	hover(name) {
		name = this.scrubName(name);
		if (name == "income_now" && this.selectedPlan.name != "Income Now") {
			this.income_now_src = "./assets/hover_selected/income_now_hover.svg";
		}
		if (name == "target_date_income" && this.selectedPlan.name != "Target Date Income") {
			this.target_date_income_src="./assets/hover_selected/target_date_income_hover.svg";
		}
		if (name == "wealth_build" && this.selectedPlan.name != "Wealth Build") {
			this.wealth_build_src="./assets/hover_selected/wealth_build_hover.svg";
		}
		if (name == "wealth_protection" && this.selectedPlan.name != "Wealth Protection") {
			this.wealth_protection_src="./assets/hover_selected/wealth_protection_hover.svg";
		}
	}

	unhover() {
		if (this.selectedPlan.name != "Income Now") {
			this.income_now_src="./assets/non_hover/income_now.svg";
		}
		if (this.selectedPlan.name != "Target Date Income") {
			this.target_date_income_src="./assets/non_hover/target_date_income.svg";
		}
		if (this.selectedPlan.name != "Wealth Build") {
			this.wealth_build_src="./assets/non_hover/wealth_build.svg";
		}
		if (this.selectedPlan.name != "Wealth Protection") {
			this.wealth_protection_src="./assets/non_hover/wealth_protection.svg";
		}
	}

	scrubName(name) {
		return name.toLowerCase().replace(/ /g,"_");
	}

	ngOnInit() {
		this.sharedService.getPlans()
			.then(plans => this.plans = plans.slice(0, 4));
	}

	selectPlan(plan: Plan) {
		this.selectedPlan = plan;
		if (this.selectedPlan.name == "Income Now") {
			this.income_now_src="./assets/hover_selected/income_now_selected.svg";
		}
		if (this.selectedPlan.name == "Target Date Income") {
			this.target_date_income_src="./assets/hover_selected/target_date_income_selected.svg";
		}
		if (this.selectedPlan.name == "Wealth Build") {
			this.wealth_build_src="./assets/hover_selected/wealth_build_selected.svg";
		}
		if (this.selectedPlan.name == "Wealth Protection") {
			this.wealth_protection_src="./assets/hover_selected/wealth_protection_selected.svg";
		}

		this.unhover();
	}

	continue() {
		this.sharedService.save(this.selectedPlan);
		this.router.navigate(['AboutYou']);
	}
}