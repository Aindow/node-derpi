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
exports.ImageRepresentations = void 0;
const URLConverter_1 = require("../util/URLConverter");
const json2typescript_1 = require("json2typescript");
/**
 * Represents the various representations (heh) of an image
 *
 * @export
 * @class ImageRepresentations
 */
let ImageRepresentations = class ImageRepresentations {
    constructor() {
        /**
         * The smallest rendered size of the image
         *
         * Dimensions: 50x50
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.thumbnailTiny = '';
        /**
         * A 150x150 thumbnail for the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.thumbnailSmall = '';
        /**
         * A 250x250 thumbnail for the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.thumbnail = '';
        /**
         * An approximately 300x300 rendering of the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.small = '';
        /**
         * An approximately 750x750 rendering of the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.medium = '';
        /**
         * An approximately 1500x1500 rendering of the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.large = '';
        /**
         * An approximately 1024x1024 (?) rendering of the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.tall = '';
        /**
         * A source-quality rendering of the image
         *
         * @readonly
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.full = '';
        /**
         * A WEBM rendering of the image, if it's a gif or webm upload
         *
         * Optional
         *
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.webm = undefined;
        /**
         * An MP4 rendering of the image, if it's a gif or webm upload
         *
         * Optional
         *
         * @type {string}
         * @memberof ImageRepresentations
         */
        this.mp4 = undefined;
    }
};
__decorate([
    json2typescript_1.JsonProperty('thumb_tiny', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "thumbnailTiny", void 0);
__decorate([
    json2typescript_1.JsonProperty('thumb_small', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "thumbnailSmall", void 0);
__decorate([
    json2typescript_1.JsonProperty('thumb', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "thumbnail", void 0);
__decorate([
    json2typescript_1.JsonProperty('small', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "small", void 0);
__decorate([
    json2typescript_1.JsonProperty('medium', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "medium", void 0);
__decorate([
    json2typescript_1.JsonProperty('large', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "large", void 0);
__decorate([
    json2typescript_1.JsonProperty('tall', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "tall", void 0);
__decorate([
    json2typescript_1.JsonProperty('full', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "full", void 0);
__decorate([
    json2typescript_1.JsonProperty('webm', URLConverter_1.URLConverter, true),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "webm", void 0);
__decorate([
    json2typescript_1.JsonProperty('mp4', URLConverter_1.URLConverter, true),
    __metadata("design:type", String)
], ImageRepresentations.prototype, "mp4", void 0);
ImageRepresentations = __decorate([
    json2typescript_1.JsonObject('ImageRepresentations')
], ImageRepresentations);
exports.ImageRepresentations = ImageRepresentations;
