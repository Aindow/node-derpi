import { User } from './User';
import { Tag } from './Tag';
/**
 * Represents an artist link on a user profile
 *
 * @export
 * @class Link
 */
export declare class Link {
    /**
     * The current state of the link
     *
     * @readonly
     * @type {string}
     * @memberof Link
     */
    readonly state: string;
    /**
     * When the link was first established
     *
     * @readonly
     * @type {Date}
     * @memberof Link
     */
    readonly created: Date;
    /**
     * The internal ID of the user associated with this link
     *
     * @readonly
     * @private
     * @type {number}
     * @memberof Link
     */
    private readonly _user;
    /**
     * The internal ID of the tag associated with this link
     *
     * @readonly
     * @private
     * @type {number}
     * @memberof Link
     */
    private readonly _tag;
    /**
     * Gets the user associated with this link
     *
     * @returns {Promise<Tag>} A Promise wrapping the user this link is associated with
     * @memberof Link
     */
    user(): Promise<User>;
    /**
     * Gets the tag associated with this link
     *
     * @returns {Promise<Tag>} A Promise wrapping the tag this link is associated with
     * @memberof Link
     */
    tag(): Promise<Tag>;
}
