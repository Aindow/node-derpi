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
exports.User = void 0;
const Link_1 = require("./Link");
const Award_1 = require("./Award");
const URLConverter_1 = require("../util/URLConverter");
const DateConverter_1 = require("../util/DateConverter");
const Consts = __importStar(require("../util/Consts"));
const json2typescript_1 = require("json2typescript");
/**
 * Represents a user on Derpibooru, registered or unregistered
 *
 * @export
 * @class User
 */
let User = class User {
    constructor() {
        /**
         * The internal ID of the user
         *
         * @readonly
         * @type {number}
         * @memberof User
         */
        this.id = -1;
        /**
         * The display name of the user
         *
         * @type {string}
         * @memberof User
         */
        this.name = 'Background Pony';
        /**
         * The user's "slug" (for pretty URLs)
         *
         * @readonly
         * @type {string}
         * @memberof User
         */
        this.slug = 'Background-Pony';
        /**
         * The role of the user
         *
         * @readonly
         * @type {string}
         * @memberof User
         */
        this.role = '';
        /**
         * The description set on the user's profile
         *
         * @readonly
         * @type {string}
         * @memberof User
         */
        this.description = '';
        /**
         * The number of comments posted by the user
         *
         * @readonly
         * @type {number}
         * @memberof User
         */
        this.comments = 0;
        /**
         * The number of images uploaded by the user
         *
         * @readonly
         * @type {number}
         * @memberof User
         */
        this.uploads = 0;
        /**
         * The number of forum posts created by the user
         *
         * @readonly
         * @type {number}
         * @memberof User
         */
        this.posts = 0;
        /**
         * The number of forum threads created by the user
         *
         * @readonly
         * @type {number}
         * @memberof User
         */
        this.topics = 0;
        /**
         * The artist links on the user's account
         *
         * @readonly
         * @type {Link[]}
         * @memberof User
         */
        this.links = [];
        /**
         * The awards the user has earned
         *
         * @readonly
         * @type {Award[]}
         * @memberof User
         */
        this.awards = [];
        /**
         * The user's avatar
         *
         * @readonly
         * @private
         * @type {string}
         * @memberof User
         */
        this.avatar = 'https://derpicdn.net/avatars/2016/02/28/03_09_08_673_Bildschirmfoto_2016_02_28_um_03.07.54.png';
        /**
         * The date the user joined the site
         *
         * @readonly
         * @type {Date}
         * @memberof User
         */
        this.created = Consts.DEFAULT_DATE;
    }
};
__decorate([
    json2typescript_1.JsonProperty('id', Number),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty('name', String),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    json2typescript_1.JsonProperty('slug', String),
    __metadata("design:type", String)
], User.prototype, "slug", void 0);
__decorate([
    json2typescript_1.JsonProperty('role', String),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    json2typescript_1.JsonProperty('description', String),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    json2typescript_1.JsonProperty('comment_count', Number),
    __metadata("design:type", Number)
], User.prototype, "comments", void 0);
__decorate([
    json2typescript_1.JsonProperty('uploads_count', Number),
    __metadata("design:type", Number)
], User.prototype, "uploads", void 0);
__decorate([
    json2typescript_1.JsonProperty('post_count', Number),
    __metadata("design:type", Number)
], User.prototype, "posts", void 0);
__decorate([
    json2typescript_1.JsonProperty('topic_count', Number),
    __metadata("design:type", Number)
], User.prototype, "topics", void 0);
__decorate([
    json2typescript_1.JsonProperty('links', [Link_1.Link]),
    __metadata("design:type", Array)
], User.prototype, "links", void 0);
__decorate([
    json2typescript_1.JsonProperty('awards', [Award_1.Award]),
    __metadata("design:type", Array)
], User.prototype, "awards", void 0);
__decorate([
    json2typescript_1.JsonProperty('avatar_url', URLConverter_1.URLConverter),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    json2typescript_1.JsonProperty('created_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], User.prototype, "created", void 0);
User = __decorate([
    json2typescript_1.JsonObject('User')
], User);
exports.User = User;
