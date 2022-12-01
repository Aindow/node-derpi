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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResults = void 0;
const Image_1 = require("./Image");
const json2typescript_1 = require("json2typescript");
const Fetch_1 = require("../util/Fetch");
const DefaultFilters_1 = require("../util/DefaultFilters");
/**
 * Represents a page of search results
 *
 * @export
 * @class SearchResults
 */
let SearchResults = class SearchResults {
    constructor() {
        /**
         * The images on this page of results
         *
         * @readonly
         * @type {Image[]}
         * @memberof SearchResults
         */
        this.images = [];
        /**
         * The total number of images returned by this search
         *
         * @readonly
         * @type {number}
         * @memberof SearchResults
         */
        this.total = 0;
        /**
         * The query used to perform this search
         *
         * @type {string}
         * @memberof SearchResults
         */
        this.query = '';
        /**
         * The sort format used on this search
         *
         * @type {ResultSortFormat}
         * @memberof SearchResults
         */
        this.sortFormat = Fetch_1.ResultSortFormat.CREATION_DATE;
        /**
         * The sort order used on this search
         *
         * @type {ResultSortOrder}
         * @memberof SearchResults
         */
        this.sortOrder = Fetch_1.ResultSortOrder.DESCENDING;
        /**
         * The next page of results
         *
         * @readonly
         * @see fetchNextPage
         * @type {number}
         * @memberof SearchResults
         */
        this.nextPage = 0;
        /**
         * The filter ID used for this search
         *
         * @readonly
         * @type {number}
         * @memberof SearchResults
         */
        this.filterID = DefaultFilters_1.DefaultFilters.DEFAULT;
    }
    /**
     * Fetches the next page of results
     *
     * @returns {SearchResults}
     * @memberof SearchResults
     */
    fetchNextPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return Fetch_1.Fetch.search({
                query: this.query,
                sortFormat: this.sortFormat,
                sortOrder: this.sortOrder,
                page: this.nextPage,
                filterID: this.filterID
            });
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('images', [Image_1.Image]),
    __metadata("design:type", Array)
], SearchResults.prototype, "images", void 0);
__decorate([
    json2typescript_1.JsonProperty('total', Number),
    __metadata("design:type", Number)
], SearchResults.prototype, "total", void 0);
SearchResults = __decorate([
    json2typescript_1.JsonObject('SearchResults')
], SearchResults);
exports.SearchResults = SearchResults;
