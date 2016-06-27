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
var estate_detail_component_1 = require('./estate-detail.component');
var BuildPortfolioComponent = (function () {
    function BuildPortfolioComponent(router, sharedService) {
        this.router = router;
        this.sharedService = sharedService;
        this.selectedEstate = { name: '' };
        this.addingEstate = false;
    }
    BuildPortfolioComponent.prototype.getPlans = function () {
        var _this = this;
        this.sharedService
            .getPlans()
            .then(function (estates) { return _this.estates = estates; })
            .catch(function (error) { return _this.error = error; });
    };
    BuildPortfolioComponent.prototype.addPlan = function () {
        this.addingEstate = true;
        this.selectedEstate = null;
    };
    BuildPortfolioComponent.prototype.close = function (savedEstate) {
        this.addingEstate = false;
        if (savedEstate) {
            this.getPlans();
        }
    };
    BuildPortfolioComponent.prototype.delete = function (estate, event) {
        var _this = this;
        event.stopPropagation();
        this.sharedService
            .delete(estate)
            .then(function (res) {
            _this.estates = _this.estates.filter(function (h) { return h !== estate; });
            if (_this.selectedEstate === estate) {
                _this.selectedEstate = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    BuildPortfolioComponent.prototype.ngOnInit = function () {
        this.getPlans();
    };
    BuildPortfolioComponent.prototype.onSelect = function (estate) {
        this.selectedEstate = estate;
        this.addingEstate = false;
    };
    BuildPortfolioComponent.prototype.gotoDetail = function () {
        this.router.navigate(['EstateDetail', { id: this.selectedEstate.id }]);
    };
    BuildPortfolioComponent = __decorate([
        core_1.Component({
            selector: 'buildportfolio',
            templateUrl: 'app/buildportfolio.component.html',
            styleUrls: ['app/buildportfolio.component.css'],
            directives: [estate_detail_component_1.EstateDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, shared_service_1.SharedService])
    ], BuildPortfolioComponent);
    return BuildPortfolioComponent;
}());
exports.BuildPortfolioComponent = BuildPortfolioComponent;
//# sourceMappingURL=buildportfolio.component.js.map