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
var router_deprecated_1 = require('@angular/router-deprecated');
var shared_service_1 = require('./shared.service');
var PortfolioTypeComponent = (function () {
    function PortfolioTypeComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.plans = [];
        this.selectedPlan = this.sharedService.getSelected();
    }
    PortfolioTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getPlans()
            .then(function (plans) { return _this.plans = plans.slice(0, 4); });
    };
    PortfolioTypeComponent.prototype.selectPlan = function (plan) {
        this.selectedPlan = plan;
    };
    PortfolioTypeComponent.prototype.continue = function () {
        this.sharedService.save(this.selectedPlan);
        this.router.navigate(['AboutYou']);
    };
    PortfolioTypeComponent = __decorate([
        core_1.Component({
            selector: 'portfoliotype',
            templateUrl: 'app/portfoliotype.component.html',
            styleUrls: ['app/portfoliotype.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, shared_service_1.SharedService])
    ], PortfolioTypeComponent);
    return PortfolioTypeComponent;
}());
exports.PortfolioTypeComponent = PortfolioTypeComponent;
//# sourceMappingURL=portfoliotype.component.js.map