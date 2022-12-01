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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Fetch = exports.ResultSortOrder = exports.ResultSortFormat = void 0;
const User_1 = require("../api/User");
const Tag_1 = require("../api/Tag");
const Image_1 = require("../api/Image");
const URLs = __importStar(require("../util/URLs"));
const Consts = __importStar(require("../util/Consts"));
const Helpers = __importStar(require("../util/Helpers"));
const SearchResults_1 = require("../api/SearchResults");
const ImageComments_1 = require("../api/ImageComments");
const DefaultFilters_1 = require("./DefaultFilters");
const json2typescript_1 = require("json2typescript");
//import { Options } from 'request';
const fetch = require('node-fetch');
/**
 * Represents various sort formats for results
 *
 * @export
 * @enum {number}
 */
var ResultSortFormat;
(function (ResultSortFormat) {
    ResultSortFormat["CREATION_DATE"] = "created_at";
    ResultSortFormat["LAST_MODIFIED"] = "updated_at";
    ResultSortFormat["INITIAL_POST_DATE"] = "first_seen_at";
    ResultSortFormat["SCORE"] = "score";
    ResultSortFormat["WILSON_SCORE"] = "wilson";
    ResultSortFormat["RELEVANCE"] = "relevance";
    ResultSortFormat["WIDTH"] = "width";
    ResultSortFormat["HEIGHT"] = "height";
    ResultSortFormat["COMMENTS"] = "comments";
    ResultSortFormat["TAG_COUNT"] = "tag_count";
    ResultSortFormat["RANDOM"] = "random";
})(ResultSortFormat = exports.ResultSortFormat || (exports.ResultSortFormat = {}));
/**
 * Represents sort orders Derpibooru allows you tu sort results by
 *
 * @export
 * @enum {number}
 */
var ResultSortOrder;
(function (ResultSortOrder) {
    ResultSortOrder["ASCENDING"] = "asc";
    ResultSortOrder["DESCENDING"] = "desc";
})(ResultSortOrder = exports.ResultSortOrder || (exports.ResultSortOrder = {}));
/**
 * Represents the maximum number of retries for ID fetching
 *
 * @private
 */
const MAXIUMUM_ID_FETCH_RETRIES = 10;
/**
 * Various functions for fetching information from Derpibooru
 *
 * @export
 * @class Fetch
 */
class Fetch {
    /**
     * Sets up some basic settings for the Fetch instance
     *
     * YOU SHOULD NOT NEED TO CALL THIS YOURSELF. IT IS DONE AT MODULE INITIALIZATION TIME.
     *
     * @static
     * @memberof Fetch
     */
    static setup() {
        this.jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.ALLOW_NULL;
    }
    /**
     * Fetches an image and its associated details
     *
     * @static
     * @param {string} id The ID of the image to fetch
     * @returns {Promise<Image>} A Promise wrapping the fetched image
     * @memberof Fetch
     */
    static fetchImage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                uri: URLs.IMAGE_URL.replace('{}', id)
            };
            const json = yield this.fetchJSON(options);
            // transparently handle duplicate images
            if (json['duplicate_of'])
                return this.fetchImage(json['duplicate_of']);
            return this.jsonConvert.deserializeObject(json.image, Image_1.Image);
        });
    }
    /**
     * Fetches a user and their associated details by name
     *
     * @static
     * @param {string} identifier The username of the user to fetch
     * @returns {Promise<User>} A Promise wrapping the fetched user
     * @memberof Fetch
     */
    static fetchUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                uri: URLs.USER_URL.replace('{}', Helpers.slugify(username))
            };
            const json = yield this.fetchJSON(options);
            return this.jsonConvert.deserializeObject(json, User_1.User);
        });
    }
    /**
     * Fetches a user and its associated details by ID
     *
     * THIS IS A VERY VERY VERY DIRTY HACK, BUT DERPIBOORU'S API DESIGN REQUIRES ITS EXISTENCE!
     * I'M SORRY!
     *
     * @static
     * @param {number} id The ID of the user to fetch
     * @returns {Promise<Tag>} A Promise wrapping the fetched user
     * @memberof Fetch
     */
    static fetchUserByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let curId = '0' + id;
            if (this.userIDToURLMap.has(id)) {
                curId = this.userIDToURLMap.get(id);
            }
            const options = {
                uri: URLs.USER_URL.replace('{}', curId)
            };
            let requestOptions = Object.assign({}, options);
            let json = yield this.fetchJSON(requestOptions);
            let loopCount = 0;
            while (json.id !== id) {
                curId = '0' + curId;
                requestOptions.uri = URLs.USER_URL.replace('{}', curId);
                json = yield this.fetchJSON(requestOptions);
                loopCount++;
                if (loopCount >= MAXIUMUM_ID_FETCH_RETRIES) {
                    throw new Error('Maximum number of fetch attempts exceeded - blame Derpibooru for allowing name -> ID collisions.');
                }
            }
            if (!this.userIDToURLMap.has(id)) {
                this.userIDToURLMap.set(id, curId);
            }
            return this.jsonConvert.deserializeObject(json, User_1.User);
        });
    }
    /**
     * Fetches a tag and its associated details by name
     *
     * @static
     * @param {string} identifier The name of the tag to fetch
     * @param {number} [page] The page of images to fetch
     * @param {filterID} [filterID] The filter ID to apply to results
     * @returns {Promise<Tag>} A Promise wrapping the fetched tag
     * @memberof Fetch
     */
    static fetchTag(name, page, filterID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (page === undefined)
                page = 1;
            if (filterID === undefined)
                filterID = DefaultFilters_1.DefaultFilters.DEFAULT;
            const options = {
                uri: URLs.TAG_URL.replace('{}', Helpers.slugify(name)),
                qs: {
                    q: "",
                    page: page,
                    filter_id: filterID
                },
                assign: null
            };
            const json = yield this.fetchJSON(options);
            let tag = this.jsonConvert.deserializeObject(json.tag, Tag_1.Tag);
            tag.filterID = filterID;
            tag.nextPage = page + 1;
            return tag;
        });
    }
    /**
     * Fetches a tag and its associated details by ID
     *
     * @static
     * @param {number} id The ID of the tag to fetch
     * @param {number} [page] The page of images to fetch
     * @param {filterID} [filterID] The filter ID to apply to results
     * @returns {Promise<Tag>} A Promise wrapping the fetched tag
     * @memberof Fetch
     */
    static fetchTagByID(id, page, filterID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (page === undefined)
                page = 1;
            if (filterID === undefined)
                filterID = DefaultFilters_1.DefaultFilters.DEFAULT;
            const options = {
                uri: URLs.TAG_SEARCH_URL,
                qs: {
                    q: 'id:' + id,
                    page: page,
                    filter_id: filterID
                },
                assign: null
            };
            let requestOptions = Object.assign({}, options);
            let json = yield this.fetchJSON(requestOptions);
            if (!json.tags)
                throw new Error('Tag with id matching ' + id + ' not found.');
            let tag = this.jsonConvert.deserializeObject(json.tags[0], Tag_1.Tag);
            tag.filterID = filterID;
            tag.nextPage = page + 1;
            return tag;
        });
    }
    /**
     * Searches for a set of images matching the given query
     *
     * @static
     * @see SearchOptions
     * @param {SearchOptions} searchOptions The options to search with
     * @returns {Promise<SearchResults>} A Promise wrapping the search results
     * @memberof Fetch
     */
    static search(searchOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            let { query, sortFormat, sortOrder, page, filterID } = searchOptions;
            if (query === undefined || query === '')
                query = '*';
            if (sortFormat === undefined)
                sortFormat = ResultSortFormat.CREATION_DATE;
            if (sortOrder === undefined)
                sortOrder = ResultSortOrder.DESCENDING;
            if (page === undefined)
                page = 1;
            if (filterID === undefined)
                filterID = DefaultFilters_1.DefaultFilters.DEFAULT;
            const options = {
                uri: URLs.SEARCH_URL,
                qs: {
                    q: query,
                    sf: sortFormat,
                    sd: sortOrder,
                    page: page,
                    filter_id: filterID
                },
                assign: null
            };
            const json = yield this.fetchJSON(options);
            let searchResults = this.jsonConvert.deserializeObject(json, SearchResults_1.SearchResults);
            searchResults.nextPage = page + 1;
            searchResults.query = query;
            searchResults.sortFormat = sortFormat;
            searchResults.sortOrder = sortOrder;
            searchResults.filterID = filterID;
            return searchResults;
        });
    }
    // /**
    //  * Searches for images that are visually similar to the image provided.
    //  *
    //  * @static
    //  * @param {ReverseImageSearchOptions} reverseImageSearchOptions The options to search with
    //  * @returns {Promise<ReverseImageSearchResults>} A Promise wrapping the returned results
    //  * @memberof Fetch
    //  */
    // public static async reverseImageSearch(reverseImageSearchOptions: ReverseImageSearchOptions): Promise<ReverseImageSearchResults> {
    // 	let { key, image, url, fuzziness } = reverseImageSearchOptions;
    // 	if (!image && !url) throw new Error('Invalid argument; either image or url must be provided.');
    // 	if (image && !key)  throw new Error('Invalid argument; the key parameter must be provided for searching by image');
    // 	if (!fuzziness)           fuzziness = 0.25; // default value
    // 	else if (fuzziness > 0.5) fuzziness = 0.5;  // clamp high
    // 	else if (fuzziness < 0.2) fuzziness = 0.2;  // clamp low
    // 	let options = {
    // 		uri: URLs.REVERSE_IMAGE_SEARCH_URL,
    // 		qs: {
    // 			url: url,
    // 			distance: fuzziness
    // 		},
    // 		assign : "POST"
    // 	};
    // 	let json = await this.fetchJSON(options);
    // 	// This operates under the assumption that all images with duplicate_of will have their duplicates show up under the other reverse image results
    // 	// TODO: does that actually happen?
    // 	json.images = json.images.filter((image: any) => !image.duplicate_of);
    // 	let reverseImageSearch = this.jsonConvert.deserializeObject(json, ReverseImageSearchResults);
    // 	// TODO: does this paginate?
    // 	return reverseImageSearch;
    // }
    /**
     * Fetches the comments on an image
     *
     * @static
     * @param {number} imageID The ID of the image to fetch comments from
     * @param {(number)} [page] The page of comments to fetch
     * @returns {Promise<ImageComments>}
     * @memberof Fetch
     */
    static fetchComments(imageID, page) {
        return __awaiter(this, void 0, void 0, function* () {
            if (page === undefined)
                page = 1;
            const options = {
                uri: URLs.COMMENTS_URL,
                qs: {
                    q: 'image_id:' + imageID,
                    page: page
                },
                assign: null
            };
            const json = yield this.fetchJSON(options);
            let comments = this.jsonConvert.deserializeObject(json, ImageComments_1.ImageComments);
            comments.nextPage = page + 1;
            comments.imageID = imageID;
            return comments;
        });
    }
    /**
     * Boilerplate to fetch JSON data from Derpibooru
     *
     * @static
     * @private
     * @param {request.UriOptions} options Options for the request
     * @returns {Promise<any>} A Promise wrapping the returned data
     * @memberof Fetch
     */
    static fetchJSON(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                //const opts = Object.assign({}, Consts.DEFAULT_REQUEST_OPTS, options);
                fetch(options.uri, (err, response) => {
                    if (err) {
                        return reject(err);
                    }
                    const status = response.statusCode;
                    if (status !== Consts.HTTP_200_OK && status !== Consts.HTTP_301_MOVED_PERMANENTLY) {
                        return reject(new Error(`Received status code ${status}`));
                    }
                    return resolve(response.json);
                });
            });
        });
    }
}
exports.Fetch = Fetch;
Fetch.jsonConvert = new json2typescript_1.JsonConvert();
Fetch.userIDToURLMap = new Map();
