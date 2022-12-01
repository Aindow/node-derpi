"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Award = void 0;
const Consts = __importStar(require("../util/Consts"));
const json2typescript_1 = require("json2typescript");
const URLConverter_1 = require("../util/URLConverter");
const DateConverter_1 = require("../util/DateConverter");
/**
 * Represents the various awards (badges) on user profiles
 *
 * @export
 * @class Award
 */
let Award = class Award {
    constructor() {
        /**
         * The title of the award
         *
         * @readonly
         * @type {string}
         * @memberof Award
         */
        this.title = '';
        /**
         * The internal ID of the award
         *
         * @readonly
         * @type {number}
         * @memberof Award
         */
        this.id = 0;
        /**
         * The award's description, if any
         *
         * @readonly
         * @type {string?}
         * @memberof Award
         */
        this.label = '';
        /**
         * The date this award was achieved by the user
         *
         * @readonly
         * @type {Date}
         * @memberof Award
         */
        this.awarded = Consts.DEFAULT_DATE;
        /**
         * The image URL for the ward
         *
         * @readonly
         * @type {string}
         * @memberof Award
         */
        this.image = '';
    }
};
__decorate([
    json2typescript_1.JsonProperty('title', String),
    __metadata("design:type", String)
], Award.prototype, "title", void 0);
__decorate([
    json2typescript_1.JsonProperty('id', Number),
    __metadata("design:type", Number)
], Award.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty('label', String),
    __metadata("design:type", String)
], Award.prototype, "label", void 0);
__decorate([
    json2typescript_1.JsonProperty('awarded_on', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Award.prototype, "awarded", void 0);
__decorate([
    json2typescript_1.JsonProperty('image_url', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], Award.prototype, "image", void 0);
Award = __decorate([
    json2typescript_1.JsonObject('Award')
], Award);
exports.Award = Award;
