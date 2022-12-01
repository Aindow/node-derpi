"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_301_MOVED_PERMANENTLY = exports.HTTP_200_OK = exports.DEFAULT_REQUEST_OPTS = exports.USER_AGENT = exports.DEFAULT_DATE = void 0;
/**
 * Represents the Unix epoch
 *
 * @private
 */
exports.DEFAULT_DATE = new Date(0);
/**
 * Represents the user agent used for requests from this package
 *
 * @private
 */
exports.USER_AGENT = 'node-derpi/' + require('../../package.json').version;
/**
 * Represents the default request options used for HTTP requests
 *
 * @private
 */
exports.DEFAULT_REQUEST_OPTS = {
    'json': true,
    'headers': {
        'User-Agent': exports.USER_AGENT
    }
};
/**
 * Represents an HTTP 200 OK response code
 *
 * @private
 */
exports.HTTP_200_OK = 200;
/**
 * Represents an HTTP 301 Moved Permanently response code
 *
 * @private
 */
exports.HTTP_301_MOVED_PERMANENTLY = 301;
