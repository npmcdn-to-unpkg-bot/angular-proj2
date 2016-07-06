import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { NgForm } from '@angular/common';

import { Plan } from './plan';
import { SharedService } from './shared.service';

@Component({
	selector: 'aboutyou-form',
	templateUrl: 'app/aboutyou-form.component.html',
	styleUrls: ['app/aboutyou-form.component.css']
})
export class AboutYouFormComponent {

	selectedPlan = this.sharedService.getSelected();
	years = [10, 15, 30, "indefinite"];
	styles = ["Conservative", "Moderately Conservative", "Moderate", "Moderately Aggressive", "Aggressive"];
	model = {investment: 35000, year: 10, funding: "non_ret", financing: "yes", style: "none"};

	constructor(private router: Router, private sharedService: SharedService) {
	}

	selectStyle(style: string) {
		this.model.style = style;
	}

	back() {
		this.router.navigate(['PortfolioType']);
	}

	continue() {
		//this.sharedService.save(this.selectedPlan);
		this.router.navigate(['BuildPortfolio']);
	}

	get diagnostic() { return JSON.stringify(this.model); }

	// Reset the form with a new plan AND restore 'pristine' class state
	// by toggling 'active' flag which causes the form
	// to be removed/re-added in a tick via NgIf
	// TODO: Workaround until NgForm has a reset method (#6822)
	active = true;

	// Reveal in html:
	// Name via form.controls = {{showFormControls(planForm)}}
	showFormControls(form: NgForm) {

		return form && form.controls['name'] &&
		form.controls['name'].value;
	}
}