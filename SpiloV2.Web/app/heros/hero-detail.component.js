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
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const hero_service_1 = require('./hero.service');
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, routeParams) {
        this.heroService = heroService;
        this.routeParams = routeParams;
    }
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }
};
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/heros/hero-detail.component.html',
        styleUrls: ['app/heros/hero-detail.component.css']
    }), 
    __metadata('design:paramtypes', [hero_service_1.HeroService, router_deprecated_1.RouteParams])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map