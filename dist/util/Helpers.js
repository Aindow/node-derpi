"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
/**
 * Slugifies a URL parameter in the same way Derpibooru does, for fetching tags
 *
 * @private
 * @export
 * @param {string} param The parameter to slugify
 */
function slugify(param) {
    return param
        .replace('-', '-dash-')
        .replace('/', '-fwslash-')
        .replace('\\', '-bwslash-')
        .replace(':', '-colon-')
        .replace('.', '-dot-')
        .replace('+', '-plus');
}
exports.slugify = slugify;
