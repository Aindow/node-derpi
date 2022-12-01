import { User } from './User';
import { Image } from './Image';
/**
 * Represents a single comment on an image
 *
 * @export
 * @class Comment
 */
export declare class Comment {
    /**
     * The ID of the comment
     *
     * @readonly
     * @type {number}
     * @memberof Comment
     */
    readonly id: number;
    /**
     * The body of the comment
     *
     * @readonly
     * @type {string}
     * @memberof Comment
     */
    readonly body: string;
    /**
     * The date the comment was posted on
     *
     * @readonly
     * @type {Date}
     * @memberof Comment
     */
    readonly posted: Date;
    /**
     * The date the comment was last updated on
     *
     * @readonly
     * @type {Date}
     * @memberof Comment
     */
    readonly updated: Date;
    /**
     * The date the comment was last edited on
     *
     * @type {Date}
     * @memberof Comment
     */
    readonly edited?: Date;
    /**
     * Why the comment was edited
     *
     * @type {string}
     * @memberof Comment
     */
    readonly editReason?: string;
    /**
     * The name of the user who posted this comment
     *
     * Use this instead of (await author()).name to save an HTTP request and make the Derpi admins happy
     *
     * @readonly
     * @type {string}
     * @memberof Comment
     */
    readonly authorName: string;
    /**
     * The ID of the user who posted this comment
     *
     * @type {number}
     * @memberof Comment
     */
    readonly authorId?: number;
    /**
     * A URI representing the user's avatar
     *
     * May be a data URI or a link to an image
     *
     * @type {string}
     * @memberof Comment
     */
    readonly authorAvatar: string;
    /**
     * The internal ID of the image this comment was posted on
     *
     * @readonly
     * @private
     * @type {number}
     * @memberof Comment
     */
    private readonly _image;
    /**
     * Gets the author of this comment
     *
     * @returns {Promise<User>} A Promise wrapping the user that posted this comment
     * @memberof Comment
     */
    author(): Promise<User | null>;
    /**
     * Gets the image this comment belongs to
     *
     * @returns {Promise<Image>} A Promise wrapping the image this comment was posted on
     * @memberof Comment
     */
    image(): Promise<Image>;
}
