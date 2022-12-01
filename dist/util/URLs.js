"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REVERSE_IMAGE_SEARCH_URL = exports.SEARCH_URL = exports.COMMENTS_URL = exports.IMAGE_URL = exports.TAG_SEARCH_URL = exports.TAG_URL = exports.USER_URL = exports.URL_BASE_PHILOMENA = exports.URL_BASE = void 0;
/**
 * Represents the base URL for all API requests
 *
 * @private
 */
exports.URL_BASE = 'https://derpibooru.org';
exports.URL_BASE_PHILOMENA = 'https://derpibooru.org/api/v1/json';
/**
 * Represents the URL for user profiles
 *
 * @private
 */
exports.USER_URL = exports.URL_BASE + '/profiles/{}.json';
/**
 * Represents the URL for tag details
 *
 * @private
 */
exports.TAG_URL = exports.URL_BASE_PHILOMENA + '/tags/{}';
/**
 * Represents the URL for tag searches
 */
exports.TAG_SEARCH_URL = exports.URL_BASE_PHILOMENA + '/search/tags';
/**
 * Represents the URL for image details
 *
 * @private
 */
exports.IMAGE_URL = exports.URL_BASE_PHILOMENA + '/images/{}';
/**
 * Represents the URL for image comments
 * PHILOMENA: /api/v1/json/search/comments?q=image_id:{}
 *
 * @private
 */
exports.COMMENTS_URL = exports.URL_BASE_PHILOMENA + '/search/comments';
/**
 * Represents the URL for searches
 * PHILOMENA: /api/v1/json/search/images
 *
 * @private
 */
exports.SEARCH_URL = exports.URL_BASE_PHILOMENA + '/search/images';
/**
 * Represents the URL for reverse image searches
 * PHILOMENA: /api/v1/json/search/reverse
 *
 * @private
 */
exports.REVERSE_IMAGE_SEARCH_URL = exports.URL_BASE_PHILOMENA + '/search/reverse';
