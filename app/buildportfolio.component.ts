import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Plan } from './plan';
import { SharedService } from './shared.service';
import { EstateDetailComponent } from './estate-detail.component';

@Component({
	selector: 'buildportfolio',
	templateUrl: 'app/buildportfolio.component.html',
	styleUrls:  ['app/buildportfolio.component.css'],
	directives: [EstateDetailComponent]
})
export class BuildPortfolioComponent implements OnInit {
	estates: Plan[];
	selectedEstate: Plan
	addingEstate = false;
	error: any;

	constructor(
		private router: Router,
		private sharedService: SharedService) { }

	getPlans() {
		this.sharedService
			.getPlans()
			.then(estates => this.estates = estates)
			.catch(error => this.error = error);
	}

	addPlan() {
		this.addingEstate = true;
		this.selectedEstate = null;
	}

	close(savedEstate: Plan) {
		this.addingEstate = false;
		if (savedEstate) { this.getPlans(); }
	}

	delete(estate: Plan, event: any) {
		event.stopPropagation();
		this.sharedService
			.delete(estate)
			.then(res => {
				this.estates = this.estates.filter(h => h !== estate);
				if (this.selectedEstate === estate) { this.selectedEstate = null; }
			})
			.catch(error => this.error = error);
	}

	ngOnInit() {
		this.getPlans();
	}

	onSelect(estate: Plan) {
		this.selectedEstate = estate;
		this.addingEstate = false;
	}

	gotoDetail() {
		this.router.navigate(['EstateDetail', { id: this.selectedEstate.id }]);
	}
}