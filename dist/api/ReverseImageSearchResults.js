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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseImageSearchResults = void 0;
const Image_1 = require("./Image");
const json2typescript_1 = require("json2typescript");
/**
 * Represents a page of search results
 *
 * @export
 * @class SearchResults
 */
let ReverseImageSearchResults = class ReverseImageSearchResults {
    constructor() {
        /**
         * The images on this page of results
         *
         * @readonly
         * @type {Image[]}
         * @memberof ReverseImageSearchResults
         */
        this.images = [];
    }
};
__decorate([
    json2typescript_1.JsonProperty('images', [Image_1.Image]),
    __metadata("design:type", Array)
], ReverseImageSearchResults.prototype, "images", void 0);
ReverseImageSearchResults = __decorate([
    json2typescript_1.JsonObject('ReverseImageSearchResults')
], ReverseImageSearchResults);
exports.ReverseImageSearchResults = ReverseImageSearchResults;
