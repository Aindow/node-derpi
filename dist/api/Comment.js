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
exports.Comment = void 0;
const Consts = __importStar(require("../util/Consts"));
const json2typescript_1 = require("json2typescript");
const DateConverter_1 = require("../util/DateConverter");
const __1 = require("..");
/**
 * Represents a single comment on an image
 *
 * @export
 * @class Comment
 */
let Comment = class Comment {
    constructor() {
        /**
         * The ID of the comment
         *
         * @readonly
         * @type {number}
         * @memberof Comment
         */
        this.id = 0;
        /**
         * The body of the comment
         *
         * @readonly
         * @type {string}
         * @memberof Comment
         */
        this.body = '';
        /**
         * The date the comment was posted on
         *
         * @readonly
         * @type {Date}
         * @memberof Comment
         */
        this.posted = Consts.DEFAULT_DATE;
        /**
         * The date the comment was last updated on
         *
         * @readonly
         * @type {Date}
         * @memberof Comment
         */
        this.updated = Consts.DEFAULT_DATE;
        /**
         * The date the comment was last edited on
         *
         * @type {Date}
         * @memberof Comment
         */
        this.edited = undefined;
        /**
         * Why the comment was edited
         *
         * @type {string}
         * @memberof Comment
         */
        this.editReason = undefined;
        /**
         * The name of the user who posted this comment
         *
         * Use this instead of (await author()).name to save an HTTP request and make the Derpi admins happy
         *
         * @readonly
         * @type {string}
         * @memberof Comment
         */
        this.authorName = '';
        /**
         * The ID of the user who posted this comment
         *
         * @type {number}
         * @memberof Comment
         */
        this.authorId = undefined;
        /**
         * A URI representing the user's avatar
         *
         * May be a data URI or a link to an image
         *
         * @type {string}
         * @memberof Comment
         */
        this.authorAvatar = '';
        /**
         * The internal ID of the image this comment was posted on
         *
         * @readonly
         * @private
         * @type {number}
         * @memberof Comment
         */
        this._image = 0;
    }
    /**
     * Gets the author of this comment
     *
     * @returns {Promise<User>} A Promise wrapping the user that posted this comment
     * @memberof Comment
     */
    author() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.authorId)
                return null;
            return __1.Fetch.fetchUserByID(this.authorId);
        });
    }
    /**
     * Gets the image this comment belongs to
     *
     * @returns {Promise<Image>} A Promise wrapping the image this comment was posted on
     * @memberof Comment
     */
    image() {
        return __awaiter(this, void 0, void 0, function* () {
            return __1.Fetch.fetchImage(this._image);
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('id', Number),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    json2typescript_1.JsonProperty('body', String),
    __metadata("design:type", String)
], Comment.prototype, "body", void 0);
__decorate([
    json2typescript_1.JsonProperty('created_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Comment.prototype, "posted", void 0);
__decorate([
    json2typescript_1.JsonProperty('updated_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Comment.prototype, "updated", void 0);
__decorate([
    json2typescript_1.JsonProperty('edited_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Comment.prototype, "edited", void 0);
__decorate([
    json2typescript_1.JsonProperty('edit_reason', String),
    __metadata("design:type", String)
], Comment.prototype, "editReason", void 0);
__decorate([
    json2typescript_1.JsonProperty('author', String),
    __metadata("design:type", String)
], Comment.prototype, "authorName", void 0);
__decorate([
    json2typescript_1.JsonProperty('user_id', Number),
    __metadata("design:type", Number)
], Comment.prototype, "authorId", void 0);
__decorate([
    json2typescript_1.JsonProperty('avatar', String),
    __metadata("design:type", String)
], Comment.prototype, "authorAvatar", void 0);
__decorate([
    json2typescript_1.JsonProperty('image_id', Number),
    __metadata("design:type", Number)
], Comment.prototype, "_image", void 0);
Comment = __decorate([
    json2typescript_1.JsonObject('Comment')
], Comment);
exports.Comment = Comment;
