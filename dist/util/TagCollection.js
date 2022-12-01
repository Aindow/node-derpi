"use strict";
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
exports.TagCollection = void 0;
const Collection_1 = require("./Collection");
const Fetch_1 = require("./Fetch");
/**
 * A collection of tags - helpful for fetching a list of tags while only making enough HTTP requests to satisfy needs
 *
 * @export
 * @class TagCollection
 * @extends {Collection<number, Tag>}
 */
class TagCollection extends Collection_1.Collection {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let tag = this._cache.get(id);
            if (!tag) {
                tag = yield Fetch_1.Fetch.fetchTagByID(id);
                this._cache.set(id, tag);
            }
            return tag;
        });
    }
}
exports.TagCollection = TagCollection;
