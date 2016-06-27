import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PortfolioTypeComponent } from './portfoliotype.component';
import { AboutYouFormComponent } from './aboutyou-form.component';
import { BuildPortfolioComponent } from './buildportfolio.component';
import { EstateDetailComponent } from './estate-detail.component';
import { SharedService } from './shared.service';

@Component({
	selector: 'my-app',

	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['PortfolioType']">Portfolio Type</a>
			<a [routerLink]="['AboutYou']">About You</a>
			<a [routerLink]="['BuildPortfolio']">Build Portfolio</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		SharedService,
	]
})
@RouteConfig([
	{ path: '/portfoliotype', name: 'PortfolioType', component: PortfolioTypeComponent, useAsDefault: true },
	{ path: '/aboutyou', name: 'AboutYou', component: AboutYouFormComponent },
	{ path: '/buildportfolio', name: 'BuildPortfolio', component: BuildPortfolioComponent },
	{ path: '/buildportfolio/:id', name: 'EstateDetail', component: EstateDetailComponent }
])
export class AppComponent {
	title = 'Home Union';
}