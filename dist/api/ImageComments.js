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
exports.ImageComments = void 0;
const Comment_1 = require("./Comment");
const json2typescript_1 = require("json2typescript");
const __1 = require("..");
/**
 * Represents a page of comments on an image
 *
 * @export
 * @class ImageComments
 */
let ImageComments = class ImageComments {
    constructor() {
        /**
         * The comments on this page
         *
         * @readonly
         * @type {Comment[]}
         * @memberof ImageComments
         */
        this.comments = [];
        /**
         * The total number of comments on the image
         *
         * @readonly
         * @type {number}
         * @memberof ImageComments
         */
        this.total = 0;
        /**
         * The index of the next page of comments
         *
         * @type {number}
         * @memberof ImageComments
         */
        this.nextPage = 0;
        /**
         * The internal ID of the image these comments were posted on
         *
         * @type {number}
         * @memberof ImageComments
         */
        this.imageID = 0;
    }
    /**
     * Retrieves the next page of comments
     *
     * @returns {Promise<ImageComments>} The next page of comments (note that comments might be empty if you go over too many pages)
     * @memberof ImageComments
     */
    fetchNextPage() {
        return __awaiter(this, void 0, void 0, function* () {
            return __1.Fetch.fetchComments(this.imageID, this.nextPage);
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('comments', [Comment_1.Comment]),
    __metadata("design:type", Array)
], ImageComments.prototype, "comments", void 0);
__decorate([
    json2typescript_1.JsonProperty('total', Number),
    __metadata("design:type", Number)
], ImageComments.prototype, "total", void 0);
ImageComments = __decorate([
    json2typescript_1.JsonObject('ImageComments')
], ImageComments);
exports.ImageComments = ImageComments;
