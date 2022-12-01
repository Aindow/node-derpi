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
exports.Link = void 0;
const Consts = __importStar(require("../util/Consts"));
const json2typescript_1 = require("json2typescript");
const DateConverter_1 = require("../util/DateConverter");
const __1 = require("..");
/**
 * Represents an artist link on a user profile
 *
 * @export
 * @class Link
 */
let Link = class Link {
    constructor() {
        /**
         * The current state of the link
         *
         * @readonly
         * @type {string}
         * @memberof Link
         */
        this.state = ''; // TODO: verified is known, what about other states?
        /**
         * When the link was first established
         *
         * @readonly
         * @type {Date}
         * @memberof Link
         */
        this.created = Consts.DEFAULT_DATE;
        /**
         * The internal ID of the user associated with this link
         *
         * @readonly
         * @private
         * @type {number}
         * @memberof Link
         */
        this._user = 0;
        /**
         * The internal ID of the tag associated with this link
         *
         * @readonly
         * @private
         * @type {number}
         * @memberof Link
         */
        this._tag = 0;
    }
    /**
     * Gets the user associated with this link
     *
     * @returns {Promise<Tag>} A Promise wrapping the user this link is associated with
     * @memberof Link
     */
    user() {
        return __awaiter(this, void 0, void 0, function* () {
            return __1.Fetch.fetchUserByID(this._user);
        });
    }
    /**
     * Gets the tag associated with this link
     *
     * @returns {Promise<Tag>} A Promise wrapping the tag this link is associated with
     * @memberof Link
     */
    tag() {
        return __awaiter(this, void 0, void 0, function* () {
            return __1.Fetch.fetchTagByID(this._tag);
        });
    }
};
__decorate([
    json2typescript_1.JsonProperty('state', String),
    __metadata("design:type", String)
], Link.prototype, "state", void 0);
__decorate([
    json2typescript_1.JsonProperty('created_at', DateConverter_1.DateConverter),
    __metadata("design:type", Date)
], Link.prototype, "created", void 0);
__decorate([
    json2typescript_1.JsonProperty('user_id', Number),
    __metadata("design:type", Number)
], Link.prototype, "_user", void 0);
__decorate([
    json2typescript_1.JsonProperty('tag_id', Number),
    __metadata("design:type", Number)
], Link.prototype, "_tag", void 0);
Link = __decorate([
    json2typescript_1.JsonObject('Link')
], Link);
exports.Link = Link;
