import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plan } from './plan';

@Injectable()
export class SharedService {

	private plansUrl = 'app/plans'; // URL to web api
	selectedPlan = {id: 0, name: '', details: ''};

	constructor(private http: Http) { }

	getPlans(): Promise<Plan[]> {
		return this.http.get(this.plansUrl)
			.toPromise()
			.then(response => response.json().data)
			.catch(this.handleError);
	}

	getPlan(id: number) {
		return this.getPlans()
			.then(plans => plans.filter(plan => plan.id === id)[0]);
	}

	save(plan: Plan) {
		this.selectedPlan = plan;
	}

	getSelected() {
		return this.selectedPlan;
	}

	delete(plan: Plan) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.plansUrl}/${plan.id}`;

		return this.http
			.delete(url, headers)
			.toPromise()
			.catch(this.handleError);
	}

	// Add new Plan
	private post(plan: Plan): Promise<Plan> {
		let headers = new Headers({
			'Content-Type': 'application/json'});

		return this.http
			.post(this.plansUrl, JSON.stringify(plan), {headers: headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	// Update existing Plan
	private put(plan: Plan) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let url = `${this.plansUrl}/${plan.id}`;

		return this.http
			.put(url, JSON.stringify(plan), {headers: headers})
			.toPromise()
			.then(() => plan)
			.catch(this.handleError);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}