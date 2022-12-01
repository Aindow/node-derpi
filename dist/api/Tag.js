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
exports.Tag = void 0;
//import { Image } from './Image';
const Fetch_1 = require("../util/Fetch");
const DefaultFilters_1 = require("../util/DefaultFilters");
const json2typescript_1 = require("json2typescript");
const URLConverter_1 = require("../util/URLConverter");
/**
 * Represents a page of tag results, as well as a list of various details about a tag
 *
 * @export
 * @class Tag
 */
let Tag = class Tag {
    constructor() {
        /**
         * The ID of this tag
         *
         * @readonly
         * @type {number}
         * @memberof Tag
         */
        this.id = 0;
        /**
         * The category of tags this tag is in
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.category = '';
        /**
         * The description of this tag
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.description = '';
        /**
         * The number of images on this tag
         *
         * @readonly
         * @type {number}
         * @memberof Tag
         */
        this.imageCount = 0;
        /**
         * The name of this tag
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.name = '';
        /**
         * The name of the tag in its namespace (part after the colon)
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.nameInNamespace = '';
        /**
         * The namespace this tag is in (part before the colon)
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.namespace = '';
        /**
         * The sluggified name of this tag
         *
         * @readonly
         * @see Helpers#sluggify
         * @type {string}
         * @memberof Tag
         */
        this.slug = '';
        /**
         * The image used for spoilering images with this tag
         *
         * @readonly
         * @type {string}
         * @memberof Tag
         */
        this.spoilerImage = '';
        /**
         * The images on this page of results for this tag
         *
         * @readonly
         * @type {Image[]}
         * @memberof Tag
         */
        // @JsonProperty('images', [Image])
        // public readonly images: Image[] = [];
        /**
         * The next page of results for this tag
         *
         * @type {number}
         * @memberof Tag
         */
        this.nextPage = 0;
        /**
         * The filter ID used for this search
         *
         * @readonly
         * @type {number}
         * @memberof Tag
         */
        this.filterID = DefaultFilters_1.DefaultFilters.DEFAULT;
    }
    /**
     * Fetches the next page of images on this tag
     *
     * @returns {Promise<Tag>}
     * @memberof Tag
     */
    fetchNextPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return Fetch_1.Fetch.fetchTagByID(this.id, this.nextPage, this.filterID);
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('id', Number),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty('category', String),
    __metadata("design:type", String)
], Tag.prototype, "category", void 0);
__decorate([
    json2typescript_1.JsonProperty('description', String),
    __metadata("design:type", String)
], Tag.prototype, "description", void 0);
__decorate([
    json2typescript_1.JsonProperty('images', Number),
    __metadata("design:type", Number)
], Tag.prototype, "imageCount", void 0);
__decorate([
    json2typescript_1.JsonProperty('name', String),
    __metadata("design:type", String)
], Tag.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty('name_in_namespace', String),
    __metadata("design:type", String)
], Tag.prototype, "nameInNamespace", void 0);
__decorate([
    json2typescript_1.JsonProperty('namespace', String),
    __metadata("design:type", String)
], Tag.prototype, "namespace", void 0);
__decorate([
    json2typescript_1.JsonProperty('slug', String),
    __metadata("design:type", String)
], Tag.prototype, "slug", void 0);
__decorate([
    json2typescript_1.JsonProperty('spoiler_image_uri', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], Tag.prototype, "spoilerImage", void 0);
Tag = __decorate([
    json2typescript_1.JsonObject('Tag')
], Tag);
exports.Tag = Tag;
