"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var SharedService = (function () {
    function SharedService(http) {
        this.http = http;
        this.plansUrl = 'app/plans'; // URL to web api
        this.selectedPlan = { id: 0, name: '', details: '' };
    }
    SharedService.prototype.getPlans = function () {
        return this.http.get(this.plansUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SharedService.prototype.getPlan = function (id) {
        return this.getPlans()
            .then(function (plans) { return plans.filter(function (plan) { return plan.id === id; })[0]; });
    };
    SharedService.prototype.save = function (plan) {
        this.selectedPlan = plan;
    };
    SharedService.prototype.getSelected = function () {
        return this.selectedPlan;
    };
    SharedService.prototype.delete = function (plan) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.plansUrl + "/" + plan.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Plan
    SharedService.prototype.post = function (plan) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.plansUrl, JSON.stringify(plan), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Plan
    SharedService.prototype.put = function (plan) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.plansUrl + "/" + plan.id;
        return this.http
            .put(url, JSON.stringify(plan), { headers: headers })
            .toPromise()
            .then(function () { return plan; })
            .catch(this.handleError);
    };
    SharedService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map