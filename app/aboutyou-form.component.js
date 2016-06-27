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
var AboutYouFormComponent = (function () {
    function AboutYouFormComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.selectedPlan = this.sharedService.getSelected();
        this.years = [10, 20, 30, 40, 50];
        this.model = { investment: 0, year: 10 };
        this.submitted = false;
        // Reset the form with a new plan AND restore 'pristine' class state
        // by toggling 'active' flag which causes the form
        // to be removed/re-added in a tick via NgIf
        // TODO: Workaround until NgForm has a reset method (#6822)
        this.active = true;
    }
    AboutYouFormComponent.prototype.back = function () {
        this.router.navigate(['PortfolioType']);
    };
    AboutYouFormComponent.prototype.continue = function () {
        //this.sharedService.save(this.selectedPlan);
        this.router.navigate(['BuildPortfolio']);
    };
    Object.defineProperty(AboutYouFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    // Reveal in html:
    // Name via form.controls = {{showFormControls(planForm)}}
    AboutYouFormComponent.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value;
    };
    AboutYouFormComponent = __decorate([
        core_1.Component({
            selector: 'aboutyou-form',
            templateUrl: 'app/aboutyou-form.component.html',
            styleUrls: ['app/aboutyou-form.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, shared_service_1.SharedService])
    ], AboutYouFormComponent);
    return AboutYouFormComponent;
}());
exports.AboutYouFormComponent = AboutYouFormComponent;
//# sourceMappingURL=aboutyou-form.component.js.map