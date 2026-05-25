/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.controller.ts"
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppController = class AppController {
};
exports.AppController = AppController;
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);


/***/ },

/***/ "./src/app.module.ts"
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./src/auth/auth.module.ts");
const companies_module_1 = __webpack_require__(/*! ./companies/companies.module */ "./src/companies/companies.module.ts");
const experience_module_1 = __webpack_require__(/*! ./experience/experience.module */ "./src/experience/experience.module.ts");
const projects_module_1 = __webpack_require__(/*! ./projects/projects.module */ "./src/projects/projects.module.ts");
const skills_module_1 = __webpack_require__(/*! ./skills/skills.module */ "./src/skills/skills.module.ts");
const stats_module_1 = __webpack_require__(/*! ./stats/stats.module */ "./src/stats/stats.module.ts");
const status_module_1 = __webpack_require__(/*! ./status/status.module */ "./src/status/status.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            skills_module_1.SkillsModule,
            experience_module_1.ExperienceModule,
            stats_module_1.StatsModule,
            projects_module_1.ProjectsModule,
            companies_module_1.CompaniesModule,
            status_module_1.StatusModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ },

/***/ "./src/app.service.ts"
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ },

/***/ "./src/auth/auth.controller.ts"
/*!*************************************!*\
  !*** ./src/auth/auth.controller.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
const validate_token_dto_1 = __webpack_require__(/*! ./dto/validate-token.dto */ "./src/auth/dto/validate-token.dto.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    validateToken(dto) {
        return this.authService.validateToken(dto.token);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('validate-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof validate_token_dto_1.ValidateTokenDto !== "undefined" && validate_token_dto_1.ValidateTokenDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "validateToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ },

/***/ "./src/auth/auth.module.ts"
/*!*********************************!*\
  !*** ./src/auth/auth.module.ts ***!
  \*********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ },

/***/ "./src/auth/auth.service.ts"
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AuthService = class AuthService {
    config;
    constructor(config) {
        this.config = config;
    }
    validateToken(token) {
        const adminToken = this.config.get('ADMIN_TOKEN');
        return { valid: token === adminToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AuthService);


/***/ },

/***/ "./src/auth/dto/validate-token.dto.ts"
/*!********************************************!*\
  !*** ./src/auth/dto/validate-token.dto.ts ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidateTokenDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ValidateTokenDto {
    token;
}
exports.ValidateTokenDto = ValidateTokenDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ValidateTokenDto.prototype, "token", void 0);


/***/ },

/***/ "./src/common/interceptors/transform.interceptor.ts"
/*!**********************************************************!*\
  !*** ./src/common/interceptors/transform.interceptor.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => ({
            data,
            timestamp: new Date().toISOString(),
        })));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ },

/***/ "./src/companies/companies.controller.ts"
/*!***********************************************!*\
  !*** ./src/companies/companies.controller.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompaniesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const companies_service_1 = __webpack_require__(/*! ./companies.service */ "./src/companies/companies.service.ts");
let CompaniesController = class CompaniesController {
    companiesService;
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    findAll() {
        return this.companiesService.findAll();
    }
    findOne(id) {
        return this.companiesService.findOne(id);
    }
};
exports.CompaniesController = CompaniesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar empresas con las que he colaborado' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompaniesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener información detallada de una empresa' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompaniesController.prototype, "findOne", null);
exports.CompaniesController = CompaniesController = __decorate([
    (0, common_1.Controller)('companies'),
    __metadata("design:paramtypes", [typeof (_a = typeof companies_service_1.CompaniesService !== "undefined" && companies_service_1.CompaniesService) === "function" ? _a : Object])
], CompaniesController);


/***/ },

/***/ "./src/companies/companies.module.ts"
/*!*******************************************!*\
  !*** ./src/companies/companies.module.ts ***!
  \*******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompaniesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_controller_1 = __webpack_require__(/*! ./companies.controller */ "./src/companies/companies.controller.ts");
const companies_service_1 = __webpack_require__(/*! ./companies.service */ "./src/companies/companies.service.ts");
let CompaniesModule = class CompaniesModule {
};
exports.CompaniesModule = CompaniesModule;
exports.CompaniesModule = CompaniesModule = __decorate([
    (0, common_1.Module)({
        controllers: [companies_controller_1.CompaniesController],
        providers: [companies_service_1.CompaniesService],
        exports: [companies_service_1.CompaniesService],
    })
], CompaniesModule);


/***/ },

/***/ "./src/companies/companies.service.ts"
/*!********************************************!*\
  !*** ./src/companies/companies.service.ts ***!
  \********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CompaniesService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_data_1 = __webpack_require__(/*! ./data/companies.data */ "./src/companies/data/companies.data.ts");
let CompaniesService = class CompaniesService {
    companies = companies_data_1.COMPANIES_DATA;
    findAll() {
        return this.companies;
    }
    findOne(id) {
        return this.companies.find((c) => c.id === id);
    }
};
exports.CompaniesService = CompaniesService;
exports.CompaniesService = CompaniesService = __decorate([
    (0, common_1.Injectable)()
], CompaniesService);


/***/ },

/***/ "./src/companies/data/companies.data.ts"
/*!**********************************************!*\
  !*** ./src/companies/data/companies.data.ts ***!
  \**********************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.COMPANIES_DATA = void 0;
exports.COMPANIES_DATA = [
    { id: '1', name: 'Mokens League', logo: 'mokensleague.webp' },
    { id: '2', name: 'Memondo Network', logo: 'memondonetwork.webp' },
    { id: '3', name: 'everis (NTTDATA)', logo: 'everisnttdata.webp' },
    { id: '4', name: 'MGA', logo: '' },
    { id: '5', name: 'Hospital Universitario de Cruces', logo: '' },
    { id: '6', name: 'Freelance', logo: 'freelance.webp' },
];


/***/ },

/***/ "./src/experience/data/experiences.data.ts"
/*!*************************************************!*\
  !*** ./src/experience/data/experiences.data.ts ***!
  \*************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EXPERIENCES_DATA = void 0;
exports.EXPERIENCES_DATA = [
    {
        id: '1',
        companyId: '1',
        showCompany: true,
        roles: [
            'EXPERIENCES.ROLES.FRONTEND_DEV',
            'EXPERIENCES.ROLES.GAME_INTERFACES_DEV',
        ],
        startDate: new Date('2024-10'),
        endDate: new Date('2026-01'),
        description: 'EXPERIENCES.DESCRIPTIONS.MOKENS_LEAGUE',
        technologyIds: [
            '1',
            '2',
            '5',
            '3',
            '13',
            '14',
            '10',
            '15',
            '24',
            '30',
            '17',
            '7',
            '33',
            '4',
            '42',
            '20',
            '9',
            '18',
            '23',
            '25',
            '21',
            '22',
        ],
        projectIds: ['1', '2'],
    },
    {
        id: '2',
        companyId: '2',
        showCompany: true,
        roles: ['EXPERIENCES.ROLES.FRONTEND_DEV'],
        startDate: new Date('2020-04'),
        endDate: new Date('2024-10'),
        description: 'EXPERIENCES.DESCRIPTIONS.MEMONDO',
        technologyIds: [
            '1',
            '2',
            '3',
            '26',
            '5',
            '7',
            '28',
            '14',
            '10',
            '15',
            '30',
            '24',
            '31',
            '32',
            '4',
            '42',
        ],
        projectIds: ['3'],
    },
    {
        id: '3',
        companyId: '3',
        showCompany: true,
        roles: ['EXPERIENCES.ROLES.FULLSTACK_DEV'],
        startDate: new Date('2016-09'),
        endDate: new Date('2020-04'),
        description: 'EXPERIENCES.DESCRIPTIONS.EVERIS',
        technologyIds: [
            '1',
            '34',
            '2',
            '3',
            '5',
            '7',
            '10',
            '24',
            '15',
            '29',
            '28',
            '14',
            '35',
            '33',
            '37',
            '38',
            '39',
            '4',
            '42',
        ],
        projectIds: ['4', '5', '6'],
    },
    {
        id: '4',
        companyId: '6',
        showCompany: true,
        roles: ['EXPERIENCES.ROLES.FULLSTACK_DEV'],
        dates: [
            {
                startDate: new Date('2013-09'),
                endDate: new Date('2014-08'),
            },
            {
                startDate: new Date('2015-10'),
                endDate: new Date('2017-01'),
            },
            {
                startDate: new Date('2023-08'),
                endDate: new Date('2024-12'),
            },
        ],
        description: 'EXPERIENCES.DESCRIPTIONS.FREELANCE',
        technologyIds: [
            '1',
            '14',
            '28',
            '2',
            '5',
            '26',
            '7',
            '3',
            '24',
            '15',
            '30',
            '40',
            '10',
            '41',
            '42',
            '43',
            '44',
            '4',
            '6',
            '8',
            '32',
        ],
        projectIds: [
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
        ],
    },
    {
        id: '5',
        companyId: '6',
        showCompany: false,
        roles: ['EXPERIENCES.ROLES.FULLSTACK_DEV'],
        dates: [
            {
                startDate: new Date('2013-03'),
                endDate: new Date('2013-06'),
            },
            {
                startDate: new Date('2015-12'),
                endDate: new Date('2016-06'),
            },
        ],
        description: 'EXPERIENCES.DESCRIPTIONS.PRACTICES',
        technologyIds: ['4', '44', '45'],
        projectIds: ['7', '8'],
    },
];


/***/ },

/***/ "./src/experience/experience.controller.ts"
/*!*************************************************!*\
  !*** ./src/experience/experience.controller.ts ***!
  \*************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExperienceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const experience_service_1 = __webpack_require__(/*! ./experience.service */ "./src/experience/experience.service.ts");
let ExperienceController = class ExperienceController {
    experienceService;
    constructor(experienceService) {
        this.experienceService = experienceService;
    }
    findAll() {
        return this.experienceService.findAll();
    }
    findOne(id) {
        return this.experienceService.findOne(id);
    }
};
exports.ExperienceController = ExperienceController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar toda la trayectoria profesional' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener detalles de una experiencia específica por ID',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExperienceController.prototype, "findOne", null);
exports.ExperienceController = ExperienceController = __decorate([
    (0, common_1.Controller)('experience'),
    __metadata("design:paramtypes", [typeof (_a = typeof experience_service_1.ExperienceService !== "undefined" && experience_service_1.ExperienceService) === "function" ? _a : Object])
], ExperienceController);


/***/ },

/***/ "./src/experience/experience.module.ts"
/*!*********************************************!*\
  !*** ./src/experience/experience.module.ts ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExperienceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_module_1 = __webpack_require__(/*! ../companies/companies.module */ "./src/companies/companies.module.ts");
const projects_module_1 = __webpack_require__(/*! ../projects/projects.module */ "./src/projects/projects.module.ts");
const skills_module_1 = __webpack_require__(/*! ../skills/skills.module */ "./src/skills/skills.module.ts");
const experience_controller_1 = __webpack_require__(/*! ./experience.controller */ "./src/experience/experience.controller.ts");
const experience_service_1 = __webpack_require__(/*! ./experience.service */ "./src/experience/experience.service.ts");
let ExperienceModule = class ExperienceModule {
};
exports.ExperienceModule = ExperienceModule;
exports.ExperienceModule = ExperienceModule = __decorate([
    (0, common_1.Module)({
        imports: [companies_module_1.CompaniesModule, projects_module_1.ProjectsModule, skills_module_1.SkillsModule],
        controllers: [experience_controller_1.ExperienceController],
        providers: [experience_service_1.ExperienceService],
    })
], ExperienceModule);


/***/ },

/***/ "./src/experience/experience.service.ts"
/*!**********************************************!*\
  !*** ./src/experience/experience.service.ts ***!
  \**********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExperienceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_service_1 = __webpack_require__(/*! ../companies/companies.service */ "./src/companies/companies.service.ts");
const projects_service_1 = __webpack_require__(/*! ../projects/projects.service */ "./src/projects/projects.service.ts");
const skills_service_1 = __webpack_require__(/*! ../skills/skills.service */ "./src/skills/skills.service.ts");
const experiences_data_1 = __webpack_require__(/*! ./data/experiences.data */ "./src/experience/data/experiences.data.ts");
let ExperienceService = class ExperienceService {
    companiesService;
    projectsService;
    skillsService;
    constructor(companiesService, projectsService, skillsService) {
        this.companiesService = companiesService;
        this.projectsService = projectsService;
        this.skillsService = skillsService;
    }
    experiences = experiences_data_1.EXPERIENCES_DATA;
    findAll() {
        return this.experiences.map((experience) => {
            return this.getExperienceResponseDto(experience);
        });
    }
    findOne(id) {
        const experience = this.experiences.find((e) => e.id === id);
        if (!experience)
            throw new common_1.NotFoundException(`Experience ${id} not found`);
        return this.getExperienceResponseDto(experience);
    }
    getExperienceResponseDto(experience) {
        return {
            ...experience,
            projects: this.projectsService.findByIds(experience.projectIds) ?? [],
            company: this.companiesService.findOne(experience.companyId),
            skills: this.skillsService.findByIds(experience.technologyIds) ?? [],
        };
    }
};
exports.ExperienceService = ExperienceService;
exports.ExperienceService = ExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof companies_service_1.CompaniesService !== "undefined" && companies_service_1.CompaniesService) === "function" ? _a : Object, typeof (_b = typeof projects_service_1.ProjectsService !== "undefined" && projects_service_1.ProjectsService) === "function" ? _b : Object, typeof (_c = typeof skills_service_1.SkillsService !== "undefined" && skills_service_1.SkillsService) === "function" ? _c : Object])
], ExperienceService);


/***/ },

/***/ "./src/projects/data/projects.data.ts"
/*!********************************************!*\
  !*** ./src/projects/data/projects.data.ts ***!
  \********************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PROJECTS_DATA = void 0;
exports.PROJECTS_DATA = [
    {
        id: '1',
        name: 'Mokens League Soccer webs',
        description: 'PROJECTS.MOKENS_LEAGUE_SOCCER.WEBS',
        companyId: '1',
    },
    {
        id: '2',
        name: 'Mokens League Soccer Heroes',
        description: 'PROJECTS.MOKENS_LEAGUE_SOCCER.HEROES',
        companyId: '1',
    },
    {
        id: '3',
        name: 'Asi va España',
        description: 'PROJECTS.MEMONDO.ASI_VA',
        companyId: '2',
    },
    {
        id: '4',
        name: 'Nuevo proyecto sin nombre',
        description: 'PROJECTS.EVERIS.NO_NAME',
        companyId: '3',
    },
    {
        id: '5',
        name: 'eLlicencies de obra',
        description: 'PROJECTS.EVERIS.ELLICENCIES',
        companyId: '3',
    },
    {
        id: '6',
        name: 'Copérnico',
        description: 'PROJECTS.EVERIS.COPERNICO',
        companyId: '3',
    },
    {
        id: '7',
        name: 'Webs MGA',
        description: 'PROJECTS.MGA.WEBS',
        companyId: '4',
    },
    {
        id: '8',
        name: 'GIRC',
        description: 'PROJECTS.HOSPITAL.GIRC',
        companyId: '5',
    },
    {
        id: '9',
        name: 'Tienda online Moda & Mangas',
        description: 'PROJECTS.FREELANCE.MODA_MANGAS',
        companyId: '6',
    },
    {
        id: '10',
        name: 'Tienda online Living Manga',
        description: 'PROJECTS.FREELANCE.LIVING_MANGA',
        companyId: '6',
    },
    {
        id: '11',
        name: 'MOC online MMI',
        description: 'PROJECTS.FREELANCE.MMI',
        companyId: '6',
    },
    {
        id: '12',
        name: 'Web GDArkitektura',
        description: 'PROJECTS.FREELANCE.GDARKITECKTURA',
        companyId: '6',
    },
    {
        id: '13',
        name: 'Web EuropActiZyme',
        description: 'PROJECTS.FREELANCE.EUROPACTIZYME',
        companyId: '6',
    },
    {
        id: '14',
        name: 'Web LEV2050',
        description: 'PROJECTS.FREELANCE.LEV2050',
        companyId: '6',
    },
    {
        id: '15',
        name: 'Web TuKomodin',
        description: 'PROJECTS.FREELANCE.TUKOMODIN',
        companyId: '6',
    },
    {
        id: '16',
        name: 'Web DentalTools',
        description: 'PROJECTS.FREELANCE.DENTALTOOLS',
        companyId: '6',
    },
    {
        id: '17',
        name: 'Web Ukiyo-e de Maider Veliz Ramas',
        description: 'PROJECTS.FREELANCE.UKIYOE',
        companyId: '6',
    },
    {
        id: '18',
        name: 'Web Hunting Video Games',
        description: 'PROJECTS.FREELANCE.HUNTING',
        companyId: '6',
    },
    {
        id: '19',
        name: 'Portfolio personal',
        description: 'PROJECTS.FREELANCE.PORTFOLIO',
        companyId: '6',
    },
];


/***/ },

/***/ "./src/projects/projects.controller.ts"
/*!*********************************************!*\
  !*** ./src/projects/projects.controller.ts ***!
  \*********************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const projects_service_1 = __webpack_require__(/*! ./projects.service */ "./src/projects/projects.service.ts");
let ProjectsController = class ProjectsController {
    projectsService;
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    findAll() {
        return this.projectsService.findAll();
    }
    findOne(id) {
        return this.projectsService.findOne(id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los proyectos del portfolio' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener la ficha técnica de un proyecto por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findOne", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [typeof (_a = typeof projects_service_1.ProjectsService !== "undefined" && projects_service_1.ProjectsService) === "function" ? _a : Object])
], ProjectsController);


/***/ },

/***/ "./src/projects/projects.module.ts"
/*!*****************************************!*\
  !*** ./src/projects/projects.module.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_module_1 = __webpack_require__(/*! ../companies/companies.module */ "./src/companies/companies.module.ts");
const projects_controller_1 = __webpack_require__(/*! ./projects.controller */ "./src/projects/projects.controller.ts");
const projects_service_1 = __webpack_require__(/*! ./projects.service */ "./src/projects/projects.service.ts");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        imports: [companies_module_1.CompaniesModule],
        controllers: [projects_controller_1.ProjectsController],
        providers: [projects_service_1.ProjectsService],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);


/***/ },

/***/ "./src/projects/projects.service.ts"
/*!******************************************!*\
  !*** ./src/projects/projects.service.ts ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProjectsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const companies_service_1 = __webpack_require__(/*! ../companies/companies.service */ "./src/companies/companies.service.ts");
const projects_data_1 = __webpack_require__(/*! ./data/projects.data */ "./src/projects/data/projects.data.ts");
let ProjectsService = class ProjectsService {
    companiesService;
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    projects = projects_data_1.PROJECTS_DATA;
    findAll() {
        return this.projects.map((project) => {
            return this.getProjectResponseDto(project);
        });
    }
    findOne(id) {
        const project = this.projects.find((p) => p.id === id);
        if (!project)
            throw new common_1.NotFoundException(`Project ${id} not found`);
        return this.getProjectResponseDto(project);
    }
    findByIds(ids) {
        const projects = this.projects.filter((p) => ids.includes(p.id));
        return projects.map((project) => {
            return this.getProjectResponseDto(project);
        });
    }
    getProjectResponseDto(project) {
        return {
            ...project,
            company: this.companiesService.findOne(project.companyId),
        };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof companies_service_1.CompaniesService !== "undefined" && companies_service_1.CompaniesService) === "function" ? _a : Object])
], ProjectsService);


/***/ },

/***/ "./src/skills/data/skills.data.ts"
/*!****************************************!*\
  !*** ./src/skills/data/skills.data.ts ***!
  \****************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SKILLS_DATA = void 0;
exports.SKILLS_DATA = [
    {
        id: '1',
        name: 'Angular',
        level: 90,
        category: 'frontend',
        icon: 'angular.svg',
        highlighted: true,
        yearsOfExperience: 10,
    },
    {
        id: '2',
        name: 'TypeScript',
        level: 90,
        category: 'frontend',
        icon: 'typescript.svg',
        highlighted: true,
        yearsOfExperience: 10,
    },
    {
        id: '3',
        name: 'SASS',
        level: 90,
        category: 'frontend',
        icon: 'sass.svg',
        highlighted: true,
        yearsOfExperience: 10,
    },
    {
        id: '4',
        name: 'HTML5',
        level: 100,
        category: 'frontend',
        icon: 'html5.svg',
        highlighted: false,
        yearsOfExperience: 10,
    },
    {
        id: '5',
        name: 'RxJS',
        level: 85,
        category: 'frontend',
        icon: 'rxjs.svg',
        highlighted: false,
        yearsOfExperience: 10,
    },
    {
        id: '6',
        name: 'NestJS',
        level: 60,
        category: 'backend',
        icon: 'nestjs.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '7',
        name: 'Node',
        level: 72,
        category: 'backend',
        icon: 'nodejs.svg',
        highlighted: false,
        yearsOfExperience: 5,
    },
    {
        id: '9',
        name: 'Docker',
        level: 30,
        category: 'devops',
        icon: 'docker.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '10',
        name: 'Git',
        level: 75,
        category: 'devops',
        icon: 'github.svg',
        highlighted: true,
        yearsOfExperience: 7,
    },
    {
        id: '13',
        name: 'React',
        level: 30,
        category: 'frontend',
        icon: 'react.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '14',
        name: 'Angular Material',
        level: 80,
        category: 'frontend',
        icon: 'amaterial.svg',
        highlighted: true,
        yearsOfExperience: 7,
    },
    {
        id: '15',
        name: 'Responsive',
        level: 100,
        category: 'tools',
        icon: 'devices',
        highlighted: false,
        yearsOfExperience: 10,
    },
    {
        id: '17',
        name: 'Chakra UI',
        level: 30,
        category: 'frontend',
        icon: 'chakraui.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '18',
        name: 'FastAPI',
        level: 20,
        category: 'backend',
        icon: 'fastapi.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '20',
        name: 'Unity + UI Toolkit',
        level: 40,
        category: 'frontend',
        icon: 'unity.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '21',
        name: 'web3',
        level: 5,
        category: 'backend',
        icon: 'web3.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '22',
        name: 'NFTs',
        level: 5,
        category: 'backend',
        icon: 'nfts.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '23',
        name: 'figma',
        level: 15,
        category: 'tools',
        icon: 'figma.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '24',
        name: 'Clean Code',
        level: 70,
        category: 'tools',
        icon: 'code-simple',
        highlighted: true,
        yearsOfExperience: 8,
    },
    {
        id: '25',
        name: 'Square',
        level: 15,
        category: 'frontend',
        icon: 'square.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '26',
        name: 'SSR',
        level: 75,
        category: 'backend',
        icon: 'arrow-clockwise',
        highlighted: true,
        yearsOfExperience: 7,
    },
    {
        id: '28',
        name: 'PrimeNG',
        level: 85,
        category: 'frontend',
        icon: 'primeng.svg',
        highlighted: false,
        yearsOfExperience: 10,
    },
    {
        id: '29',
        name: 'PrimeFaces',
        level: 75,
        category: 'frontend',
        icon: 'primefaces.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '30',
        name: 'Optimización',
        level: 80,
        category: 'devops',
        icon: 'rocket-launch',
        highlighted: true,
        yearsOfExperience: 6,
    },
    {
        id: '31',
        name: 'Google Performance',
        level: 70,
        category: 'devops',
        icon: 'gperformance.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '32',
        name: 'Asana',
        level: 90,
        category: 'tools',
        icon: 'asana.svg',
        highlighted: false,
        yearsOfExperience: 6,
    },
    {
        id: '33',
        name: 'Jira',
        level: 70,
        category: 'tools',
        icon: 'jira.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '34',
        name: 'Java',
        level: 70,
        category: 'backend',
        icon: 'java.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '35',
        name: 'Spring y Struts',
        level: 60,
        category: 'devops',
        icon: 'struts.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '37',
        name: 'Oracle SQL',
        level: 60,
        category: 'backend',
        icon: 'oraclesql.svg',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '38',
        name: 'Code Review',
        level: 50,
        category: 'soft',
        icon: 'magnifying-glass-plus',
        highlighted: false,
        yearsOfExperience: 2,
    },
    {
        id: '39',
        name: 'Mentoring',
        level: 50,
        category: 'soft',
        icon: 'chalkboard-teacher',
        highlighted: false,
        yearsOfExperience: 2,
    },
    {
        id: '40',
        name: 'Prestashop',
        level: 80,
        category: 'backend',
        icon: 'prestashop.svg',
        highlighted: false,
        yearsOfExperience: 2,
    },
    {
        id: '41',
        name: 'Symphony',
        level: 53,
        category: 'backend',
        icon: 'symphony.svg',
        highlighted: false,
        yearsOfExperience: 2,
    },
    {
        id: '42',
        name: 'CSS3',
        level: 100,
        category: 'frontend',
        icon: 'css3.svg',
        highlighted: false,
        yearsOfExperience: 10,
    },
    {
        id: '43',
        name: 'Wordpress',
        level: 80,
        category: 'frontend',
        icon: 'wordpress.svg',
        highlighted: false,
        yearsOfExperience: 5,
    },
    {
        id: '44',
        name: 'SQL',
        level: 60,
        category: 'backend',
        icon: 'sql.webp',
        highlighted: false,
        yearsOfExperience: 3,
    },
    {
        id: '45',
        name: 'ASP .Net',
        level: 30,
        category: 'backend',
        icon: 'aspnet.webp',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '46',
        name: 'Trabajo en equipo',
        level: 100,
        category: 'soft',
        icon: 'users-three',
        highlighted: false,
        yearsOfExperience: 8,
    },
    {
        id: '47',
        name: 'Trabajo en remoto',
        level: 100,
        category: 'soft',
        icon: 'screencast',
        highlighted: false,
        yearsOfExperience: 5,
    },
    {
        id: '48',
        name: 'Jest',
        level: 60,
        category: 'frontend',
        icon: 'jest.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
    {
        id: '49',
        name: 'GSAP',
        level: 60,
        category: 'frontend',
        icon: 'gsap.svg',
        highlighted: false,
        yearsOfExperience: 1,
    },
];


/***/ },

/***/ "./src/skills/skills.controller.ts"
/*!*****************************************!*\
  !*** ./src/skills/skills.controller.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SkillsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const skills_service_1 = __webpack_require__(/*! ./skills.service */ "./src/skills/skills.service.ts");
let SkillsController = class SkillsController {
    skillsService;
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    findAll(category, onlyHighlighted) {
        const highlighted = onlyHighlighted === 'true';
        return this.skillsService.findAll(category, highlighted);
    }
    findAllCategories() {
        return this.skillsService.getCategories();
    }
};
exports.SkillsController = SkillsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener listado completo de habilidades' }),
    __param(0, (0, common_1.Query)('category')),
    __param(1, (0, common_1.Query)('onlyHighlighted')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener las categorías de habilidades (Frontend, Backend, etc.)',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SkillsController.prototype, "findAllCategories", null);
exports.SkillsController = SkillsController = __decorate([
    (0, common_1.Controller)('skills'),
    __metadata("design:paramtypes", [typeof (_a = typeof skills_service_1.SkillsService !== "undefined" && skills_service_1.SkillsService) === "function" ? _a : Object])
], SkillsController);


/***/ },

/***/ "./src/skills/skills.module.ts"
/*!*************************************!*\
  !*** ./src/skills/skills.module.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SkillsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const skills_controller_1 = __webpack_require__(/*! ./skills.controller */ "./src/skills/skills.controller.ts");
const skills_service_1 = __webpack_require__(/*! ./skills.service */ "./src/skills/skills.service.ts");
let SkillsModule = class SkillsModule {
};
exports.SkillsModule = SkillsModule;
exports.SkillsModule = SkillsModule = __decorate([
    (0, common_1.Module)({
        controllers: [skills_controller_1.SkillsController],
        providers: [skills_service_1.SkillsService],
        exports: [skills_service_1.SkillsService],
    })
], SkillsModule);


/***/ },

/***/ "./src/skills/skills.service.ts"
/*!**************************************!*\
  !*** ./src/skills/skills.service.ts ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SkillsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const skills_data_1 = __webpack_require__(/*! ./data/skills.data */ "./src/skills/data/skills.data.ts");
let SkillsService = class SkillsService {
    skills = skills_data_1.SKILLS_DATA;
    findAll(category, onlyHighlighted) {
        let filtered = [...this.skills];
        if (category && category !== 'all') {
            filtered = filtered.filter((s) => s.category === category);
        }
        if (onlyHighlighted) {
            filtered = filtered.filter((s) => s.highlighted);
        }
        return filtered.sort((a, b) => {
            if (a.highlighted !== b.highlighted)
                return a.highlighted ? -1 : 1;
            return b.level - a.level;
        });
    }
    getCategories() {
        const categories = this.skills.map((s) => s.category);
        return [...new Set(categories)];
    }
    findByIds(ids) {
        return this.skills.filter((s) => ids.includes(s.id));
    }
    getHighlightedCount() {
        return this.skills.filter((s) => s.highlighted).length;
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)()
], SkillsService);


/***/ },

/***/ "./src/stats/constants/stat.constants.ts"
/*!***********************************************!*\
  !*** ./src/stats/constants/stat.constants.ts ***!
  \***********************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatCalculation = exports.StatKind = void 0;
var StatKind;
(function (StatKind) {
    StatKind["STATIC"] = "static";
    StatKind["DYNAMIC"] = "dynamic";
    StatKind["SERVICE"] = "service";
})(StatKind || (exports.StatKind = StatKind = {}));
var StatCalculation;
(function (StatCalculation) {
    StatCalculation["YEARS"] = "years";
    StatCalculation["DAYS"] = "days";
})(StatCalculation || (exports.StatCalculation = StatCalculation = {}));


/***/ },

/***/ "./src/stats/stats.controller.ts"
/*!***************************************!*\
  !*** ./src/stats/stats.controller.ts ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const stats_service_1 = __webpack_require__(/*! ./stats.service */ "./src/stats/stats.service.ts");
let StatsController = class StatsController {
    statsService;
    constructor(statsService) {
        this.statsService = statsService;
    }
    findAll() {
        return this.statsService.findAll();
    }
};
exports.StatsController = StatsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener estadísticas generales (años de experiencia, proyectos totales, etc.)',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatsController.prototype, "findAll", null);
exports.StatsController = StatsController = __decorate([
    (0, common_1.Controller)('stats'),
    __metadata("design:paramtypes", [typeof (_a = typeof stats_service_1.StatsService !== "undefined" && stats_service_1.StatsService) === "function" ? _a : Object])
], StatsController);


/***/ },

/***/ "./src/stats/stats.module.ts"
/*!***********************************!*\
  !*** ./src/stats/stats.module.ts ***!
  \***********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const skills_module_1 = __webpack_require__(/*! ../skills/skills.module */ "./src/skills/skills.module.ts");
const stats_controller_1 = __webpack_require__(/*! ./stats.controller */ "./src/stats/stats.controller.ts");
const stats_service_1 = __webpack_require__(/*! ./stats.service */ "./src/stats/stats.service.ts");
let StatsModule = class StatsModule {
};
exports.StatsModule = StatsModule;
exports.StatsModule = StatsModule = __decorate([
    (0, common_1.Module)({
        imports: [skills_module_1.SkillsModule],
        controllers: [stats_controller_1.StatsController],
        providers: [stats_service_1.StatsService],
    })
], StatsModule);


/***/ },

/***/ "./src/stats/stats.service.ts"
/*!************************************!*\
  !*** ./src/stats/stats.service.ts ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatsService = void 0;
const stat_constants_1 = __webpack_require__(/*! ./constants/stat.constants */ "./src/stats/constants/stat.constants.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const skills_service_1 = __webpack_require__(/*! ../skills/skills.service */ "./src/skills/skills.service.ts");
let StatsService = class StatsService {
    skillsService;
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    rawStats = [
        {
            id: 'experience',
            label: 'STATS.EXPERIENCE',
            icon: 'experience.webp',
            stat: {
                kind: stat_constants_1.StatKind.DYNAMIC,
                startDate: new Date('2016-01-01'),
                calculation: stat_constants_1.StatCalculation.YEARS,
                showPlus: true,
            },
        },
        {
            id: 'remote',
            label: 'STATS.REMOTE',
            icon: 'remote.webp',
            stat: {
                kind: stat_constants_1.StatKind.STATIC,
                value: 5,
                showPlus: true,
            },
        },
        {
            id: 'skills',
            label: 'STATS.SKILLS',
            icon: 'skills.webp',
            stat: { kind: stat_constants_1.StatKind.SERVICE },
        },
        {
            id: 'coffee',
            label: 'STATS.COFFEES',
            icon: 'coffee.webp',
            stat: {
                kind: stat_constants_1.StatKind.DYNAMIC,
                startDate: new Date('2016-01-01'),
                calculation: stat_constants_1.StatCalculation.DAYS,
                showPlus: true,
                multiplier: 3,
            },
        },
    ];
    findAll() {
        return this.rawStats.map((item) => ({
            id: item.id,
            label: item.label,
            icon: item.icon,
            value: this.calculateFinalValue(item.stat),
            showPlus: this.shouldShowPlus(item.stat),
        }));
    }
    calculateFinalValue(stat) {
        const multiplier = stat.multiplier ?? 1;
        switch (stat.kind) {
            case stat_constants_1.StatKind.STATIC:
                return stat.value;
            case stat_constants_1.StatKind.DYNAMIC:
                const diff = stat.calculation === stat_constants_1.StatCalculation.YEARS
                    ? this.diffInYears(stat.startDate)
                    : this.diffInDays(stat.startDate);
                return diff * multiplier;
            case stat_constants_1.StatKind.SERVICE:
                return this.skillsService.getHighlightedCount() * multiplier;
            default:
                return 0;
        }
    }
    shouldShowPlus(stat) {
        return stat.showPlus ?? false;
    }
    diffInYears(date) {
        const diff = Math.abs(Date.now() - date.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    diffInDays(date) {
        const diff = Math.abs(Date.now() - date.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof skills_service_1.SkillsService !== "undefined" && skills_service_1.SkillsService) === "function" ? _a : Object])
], StatsService);


/***/ },

/***/ "./src/status/constants/status.contants.ts"
/*!*************************************************!*\
  !*** ./src/status/constants/status.contants.ts ***!
  \*************************************************/
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OFFLINE = exports.ONLINE = void 0;
exports.ONLINE = 'Online';
exports.OFFLINE = 'Offline';


/***/ },

/***/ "./src/status/data/status.data.ts"
/*!****************************************!*\
  !*** ./src/status/data/status.data.ts ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.STATUS = void 0;
const status_contants_1 = __webpack_require__(/*! ../constants/status.contants */ "./src/status/constants/status.contants.ts");
exports.STATUS = status_contants_1.ONLINE;


/***/ },

/***/ "./src/status/status.controller.ts"
/*!*****************************************!*\
  !*** ./src/status/status.controller.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const status_service_1 = __webpack_require__(/*! ./status.service */ "./src/status/status.service.ts");
let StatusController = class StatusController {
    statusService;
    constructor(statusService) {
        this.statusService = statusService;
    }
    getStatus() {
        return this.statusService.getStatus();
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Verificar el estado de la API' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "getStatus", null);
exports.StatusController = StatusController = __decorate([
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [typeof (_a = typeof status_service_1.StatusService !== "undefined" && status_service_1.StatusService) === "function" ? _a : Object])
], StatusController);


/***/ },

/***/ "./src/status/status.module.ts"
/*!*************************************!*\
  !*** ./src/status/status.module.ts ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const status_service_1 = __webpack_require__(/*! ./status.service */ "./src/status/status.service.ts");
const status_controller_1 = __webpack_require__(/*! ./status.controller */ "./src/status/status.controller.ts");
let StatusModule = class StatusModule {
};
exports.StatusModule = StatusModule;
exports.StatusModule = StatusModule = __decorate([
    (0, common_1.Module)({
        controllers: [status_controller_1.StatusController],
        providers: [status_service_1.StatusService],
    })
], StatusModule);


/***/ },

/***/ "./src/status/status.service.ts"
/*!**************************************!*\
  !*** ./src/status/status.service.ts ***!
  \**************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StatusService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const status_data_1 = __webpack_require__(/*! ./data/status.data */ "./src/status/data/status.data.ts");
let StatusService = class StatusService {
    rawStatus = status_data_1.STATUS;
    getStatus() {
        return { status: this.rawStatus };
    }
};
exports.StatusService = StatusService;
exports.StatusService = StatusService = __decorate([
    (0, common_1.Injectable)()
], StatusService);


/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/config"
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/config");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "@nestjs/swagger"
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
(module) {

module.exports = require("@nestjs/swagger");

/***/ },

/***/ "class-validator"
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
(module) {

module.exports = require("class-validator");

/***/ },

/***/ "reflect-metadata"
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
(module) {

module.exports = require("reflect-metadata");

/***/ },

/***/ "rxjs"
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
(module) {

module.exports = require("rxjs");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const transform_interceptor_1 = __webpack_require__(/*! ./common/interceptors/transform.interceptor */ "./src/common/interceptors/transform.interceptor.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CSR Angular Developer API')
        .setDescription('Documentación de los servicios del Portfolio')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/v1/docs', app, document);
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.enableCors({
        origin: [
            'https://csrangulardeveloper.nom.es',
            'http://localhost:4200',
            'http://localhost:4000',
        ],
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();

})();

/******/ })()
;