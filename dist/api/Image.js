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
exports.Image = void 0;
const json2typescript_1 = require("json2typescript");
const User_1 = require("./User");
const ImageRepresentations_1 = require("./ImageRepresentations");
const Consts = __importStar(require("../util/Consts"));
const DateConverter_1 = require("../util/DateConverter");
const Fetch_1 = require("../util/Fetch");
const TagCollection_1 = require("../util/TagCollection");
/**
 * Represents a single image
 *
 * @export
 * @class Image
 */
let Image = class Image {
    constructor() {
        /**
         * The internal ID of the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.id = 0;
        /**
         * The total score on the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.score = 0;
        /**
         * The number of upvotes on the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.upvotes = 0;
        /**
         * The number of downvotes on the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.downvotes = 0;
        /**
         * The number of favorites on the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.favorites = 0;
        /**
         * Gets a list of tag names on the image
         *
         * @readonly
         * @type {string[]}
         * @memberof Image
         */
        this.tagNames = [];
        /**
         * The width of the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.width = 0;
        /**
         * The height of the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.height = 0;
        /**
         * The filename of the original uploaded image
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.fileName = '';
        /**
         * The description of the image on Derpibooru, if any
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.description = '';
        /**
         * The aspect ratio of the image
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.aspectRatio = 0;
        /**
         * The format the image was originally in before being uploaded to Deribooru
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.originalFormat = '';
        /**
         * The MIME type of the image
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.mimeType = '';
        /**
         * The current SHA-512 hash of the image
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.sha512 = '';
        /**
         * The SHA-512 hash of the original image without optimizations
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.sha512Original = '';
        /**
         * The source of the image, if specified by the uploader
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.source = '';
        /**
         * The different possible representations of the image
         *
         * @readonly
         * @type {ImageRepresentations}
         * @memberof Image
         */
        this.representations = new ImageRepresentations_1.ImageRepresentations();
        /**
         * Whether the image has been rendered by Derpibooru
         *
         * @readonly
         * @type {boolean}
         * @memberof Image
         */
        this.isRendered = false;
        /**
         * Whether the image has finished being optimized by Derpibooru
         *
         * @readonly
         * @type {boolean}
         * @memberof Image
         */
        this.isOptimized = false;
        /**
         * When the image was uploaded to the site
         *
         * @readonly
         * @type {Date}
         * @memberof Image
         */
        this.created = Consts.DEFAULT_DATE;
        /**
         * When the image details were last edited
         *
         * @readonly
         * @type {Date}
         * @memberof Image
         */
        this.updated = Consts.DEFAULT_DATE;
        /**
         * When the image was first seen
         *
         * @readonly
         * @type {Date}
         * @memberof Image
         */
        this.firstSeen = Consts.DEFAULT_DATE;
        /**
         * The name of the user that uploaded the image
         *
         * Use this instead of (await uploader()).name to save an HTTP request and make the Derpi admins happy
         *
         * @readonly
         * @type {string}
         * @memberof Image
         */
        this.uploaderName = '';
        /**
         * The ID of the user that uploaded the image
         *
         * Use this instead of (await uploader()).id to save an HTTP request and make the Derpi admins happy
         *
         * @readonly
         * @type {number}
         * @memberof Image
         */
        this.uploaderID = 0;
        /**
         * The tag IDs on the image as returned from the API
         *
         * @private
         * @readonly
         * @type {number[]}
         * @memberof Image
         */
        this._tags = [];
    }
    /**
     * The tags on the image, represented as a comma-separated string for convenience
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    get tagString() {
        return this.tagNames.join(', ');
    }
    /**
     * Gets the name of the artist of the image
     *
     * Returns null if the image has no artist
     *
     * @readonly
     * @type {(string[])}
     * @memberof Image
     */
    get artistNames() {
        const artists = this.tagNames.filter(tag => tag.startsWith('artist:'));
        return artists.map(artist => artist.substring('artist:'.length));
    }
    /**
     * Gets the user that uploaded the image
     *
     * @returns {Promise<User>} A Promise wrapping the uploader's details
     * @memberof Image
     */
    uploader() {
        return __awaiter(this, void 0, void 0, function* () {
            // Today I learned: Background Pony is a valid uploader for uploads originating from guest accounts, **HOWEVER**
            // it is ALSO a valid login name (see: https://derpibooru.org/profiles/Background%20Pony).
            // So, I have to store both the uploader **and** uploader ID here to make sure both are set to values indicating a guest.
            // This API is going to drive me insane.
            // tslint:disable-next-line: strict-type-predicates
            if (this.uploaderName === 'Background Pony' && this.uploaderID === null) {
                return new User_1.User();
            }
            return Fetch_1.Fetch.fetchUserByID(this.uploaderID);
        });
    }
    /**
     * Gets the tags on the image
     *
     * @returns {Promise<TagCollection>} A Promise wrapping the tags on the image
     * @memberof Image
     */
    tags() {
        return __awaiter(this, void 0, void 0, function* () {
            return new TagCollection_1.TagCollection(this._tags);
        });
    }
    /**
     * Gets the comments on the image
     *
     * @param {(number | undefined)} page The page number of comments to fetch (max appears to be total / 20 for non-logged-in users)
     * @returns {Promise<ImageComments>}
     * @memberof Image
     */
    comments(page) {
        return __awaiter(this, void 0, void 0, function* () {
            return Fetch_1.Fetch.fetchComments(this.id, page);
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('id', Number),
    __metadata("design:type", Number)
], Image.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty('score', Number),
    __metadata("design:type", Number)
], Image.prototype, "score", void 0);
__decorate([
    json2typescript_1.JsonProperty('upvotes', Number),
    __metadata("design:type", Number)
], Image.prototype, "upvotes", void 0);
__decorate([
    json2typescript_1.JsonProperty('downvotes', Number),
    __metadata("design:type", Number)
], Image.prototype, "downvotes", void 0);
__decorate([
    json2typescript_1.JsonProperty('faves', Number),
    __metadata("design:type", Number)
], Image.prototype, "favorites", void 0);
__decorate([
    json2typescript_1.JsonProperty('tags', [String]),
    __metadata("design:type", Array)
], Image.prototype, "tagNames", void 0);
__decorate([
    json2typescript_1.JsonProperty('width', Number),
    __metadata("design:type", Number)
], Image.prototype, "width", void 0);
__decorate([
    json2typescript_1.JsonProperty('height', Number),
    __metadata("design:type", Number)
], Image.prototype, "height", void 0);
__decorate([
    json2typescript_1.JsonProperty('name', String),
    __metadata("design:type", String)
], Image.prototype, "fileName", void 0);
__decorate([
    json2typescript_1.JsonProperty('description', String),
    __metadata("design:type", String)
], Image.prototype, "description", void 0);
__decorate([
    json2typescript_1.JsonProperty('aspect_ratio', Number),
    __metadata("design:type", Number)
], Image.prototype, "aspectRatio", void 0);
__decorate([
    json2typescript_1.JsonProperty('format', String),
    __metadata("design:type", String)
], Image.prototype, "originalFormat", void 0);
__decorate([
    json2typescript_1.JsonProperty('mime_type', String),
    __metadata("design:type", String)
], Image.prototype, "mimeType", void 0);
__decorate([
    json2typescript_1.JsonProperty('sha512_hash', String),
    __metadata("design:type", String)
], Image.prototype, "sha512", void 0);
__decorate([
    json2typescript_1.JsonProperty('orig_sha512_hash', String),
    __metadata("design:type", String)
], Image.prototype, "sha512Original", void 0);
__decorate([
    json2typescript_1.JsonProperty('source_url', String),
    __metadata("design:type", String)
], Image.prototype, "source", void 0);
__decorate([
    json2typescript_1.JsonProperty('representations', ImageRepresentations_1.ImageRepresentations),
    __metadata("design:type", ImageRepresentations_1.ImageRepresentations)
], Image.prototype, "representations", void 0);
__decorate([
    json2typescript_1.JsonProperty('processed', Boolean),
    __metadata("design:type", Boolean)
], Image.prototype, "isRendered", void 0);
__decorate([
    json2typescript_1.JsonProperty('processed', Boolean),
    __metadata("design:type", Boolean)
], Image.prototype, "isOptimized", void 0);
__decorate([
    json2typescript_1.JsonProperty('created_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Image.prototype, "created", void 0);
__decorate([
    json2typescript_1.JsonProperty('updated_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Image.prototype, "updated", void 0);
__decorate([
    json2typescript_1.JsonProperty('first_seen_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Image.prototype, "firstSeen", void 0);
__decorate([
    json2typescript_1.JsonProperty('uploader', String),
    __metadata("design:type", String)
], Image.prototype, "uploaderName", void 0);
__decorate([
    json2typescript_1.JsonProperty('uploader_id', Number),
    __metadata("design:type", Number)
], Image.prototype, "uploaderID", void 0);
__decorate([
    json2typescript_1.JsonProperty('tag_ids', [Number]),
    __metadata("design:type", Array)
], Image.prototype, "_tags", void 0);
Image = __decorate([
    json2typescript_1.JsonObject('Image')
], Image);
exports.Image = Image;
