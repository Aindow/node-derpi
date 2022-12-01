"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLConverter = void 0;
const json2typescript_1 = require("json2typescript");
/**
 * Converts the no-protocol URLs returned by Derpibooru to HTTPS URLs
 *
 * @private
 * @export
 * @class URLConverter
 * @implements {JsonCustomConvert<String>}
 */
let URLConverter = class URLConverter {
    serialize(link) {
        return link;
    }
    deserialize(link) {
        if (link === null || link === undefined || link === '')
            return '';
        if (link.substring(0, 2) === '//')
            return 'https:' + link;
        return link;
    }
};
URLConverter = __decorate([
    json2typescript_1.JsonConverter
], URLConverter);
exports.URLConverter = URLConverter;
