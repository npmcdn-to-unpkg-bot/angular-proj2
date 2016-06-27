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
var plan_1 = require('./plan');
var shared_service_1 = require('./shared.service');
var EstateDetailComponent = (function () {
    function EstateDetailComponent(sharedService, routeParams) {
        this.sharedService = sharedService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    EstateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.sharedService.getPlan(id)
                .then(function (plan) { return _this.plan = plan; });
        }
        else {
            this.navigated = false;
            this.plan = new plan_1.Plan();
        }
    };
    /*save() {
        this.sharedService
            .save(this.plan)
            .then(plan => {
                this.plan = plan;
                this.goBack(plan);
            })
            .catch(error => this.error = error);
    }*/
    EstateDetailComponent.prototype.goBack = function (savedEstate) {
        if (savedEstate === void 0) { savedEstate = null; }
        this.close.emit(savedEstate);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', plan_1.Plan)
    ], EstateDetailComponent.prototype, "plan", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EstateDetailComponent.prototype, "close", void 0);
    EstateDetailComponent = __decorate([
        core_1.Component({
            selector: 'estate-detail',
            templateUrl: 'app/estate-detail.component.html',
            styleUrls: ['app/estate-detail.component.css']
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService, router_deprecated_1.RouteParams])
    ], EstateDetailComponent);
    return EstateDetailComponent;
}());
exports.EstateDetailComponent = EstateDetailComponent;
//# sourceMappingURL=estate-detail.component.js.map