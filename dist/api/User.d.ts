import { Link } from './Link';
import { Award } from './Award';
/**
 * Represents a user on Derpibooru, registered or unregistered
 *
 * @export
 * @class User
 */
export declare class User {
    /**
     * The internal ID of the user
     *
     * @readonly
     * @type {number}
     * @memberof User
     */
    readonly id: number;
    /**
     * The display name of the user
     *
     * @type {string}
     * @memberof User
     */
    name: string;
    /**
     * The user's "slug" (for pretty URLs)
     *
     * @readonly
     * @type {string}
     * @memberof User
     */
    readonly slug: string;
    /**
     * The role of the user
     *
     * @readonly
     * @type {string}
     * @memberof User
     */
    readonly role: string;
    /**
     * The description set on the user's profile
     *
     * @readonly
     * @type {string}
     * @memberof User
     */
    readonly description: string;
    /**
     * The number of comments posted by the user
     *
     * @readonly
     * @type {number}
     * @memberof User
     */
    readonly comments: number;
    /**
     * The number of images uploaded by the user
     *
     * @readonly
     * @type {number}
     * @memberof User
     */
    readonly uploads: number;
    /**
     * The number of forum posts created by the user
     *
     * @readonly
     * @type {number}
     * @memberof User
     */
    readonly posts: number;
    /**
     * The number of forum threads created by the user
     *
     * @readonly
     * @type {number}
     * @memberof User
     */
    readonly topics: number;
    /**
     * The artist links on the user's account
     *
     * @readonly
     * @type {Link[]}
     * @memberof User
     */
    readonly links: Link[];
    /**
     * The awards the user has earned
     *
     * @readonly
     * @type {Award[]}
     * @memberof User
     */
    readonly awards: Award[];
    /**
     * The user's avatar
     *
     * @readonly
     * @private
     * @type {string}
     * @memberof User
     */
    readonly avatar: string;
    /**
     * The date the user joined the site
     *
     * @readonly
     * @type {Date}
     * @memberof User
     */
    readonly created: Date;
}
