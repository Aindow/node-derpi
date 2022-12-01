import { User } from './User';
import { ImageRepresentations } from './ImageRepresentations';
import { TagCollection } from '../util/TagCollection';
import { ImageComments } from './ImageComments';
/**
 * Represents a single image
 *
 * @export
 * @class Image
 */
export declare class Image {
    /**
     * The internal ID of the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly id: number;
    /**
     * The total score on the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly score: number;
    /**
     * The number of upvotes on the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly upvotes: number;
    /**
     * The number of downvotes on the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly downvotes: number;
    /**
     * The number of favorites on the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly favorites: number;
    /**
     * Gets a list of tag names on the image
     *
     * @readonly
     * @type {string[]}
     * @memberof Image
     */
    readonly tagNames: string[];
    /**
     * The tags on the image, represented as a comma-separated string for convenience
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    get tagString(): string;
    /**
     * Gets the name of the artist of the image
     *
     * Returns null if the image has no artist
     *
     * @readonly
     * @type {(string[])}
     * @memberof Image
     */
    get artistNames(): string[];
    /**
     * The width of the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly width: number;
    /**
     * The height of the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly height: number;
    /**
     * The filename of the original uploaded image
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly fileName: string;
    /**
     * The description of the image on Derpibooru, if any
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly description: string;
    /**
     * The aspect ratio of the image
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly aspectRatio: number;
    /**
     * The format the image was originally in before being uploaded to Deribooru
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly originalFormat: string;
    /**
     * The MIME type of the image
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly mimeType: string;
    /**
     * The current SHA-512 hash of the image
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly sha512: string;
    /**
     * The SHA-512 hash of the original image without optimizations
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly sha512Original: string;
    /**
     * The source of the image, if specified by the uploader
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly source: string;
    /**
     * The different possible representations of the image
     *
     * @readonly
     * @type {ImageRepresentations}
     * @memberof Image
     */
    readonly representations: ImageRepresentations;
    /**
     * Whether the image has been rendered by Derpibooru
     *
     * @readonly
     * @type {boolean}
     * @memberof Image
     */
    readonly isRendered: boolean;
    /**
     * Whether the image has finished being optimized by Derpibooru
     *
     * @readonly
     * @type {boolean}
     * @memberof Image
     */
    readonly isOptimized: boolean;
    /**
     * When the image was uploaded to the site
     *
     * @readonly
     * @type {Date}
     * @memberof Image
     */
    readonly created: Date;
    /**
     * When the image details were last edited
     *
     * @readonly
     * @type {Date}
     * @memberof Image
     */
    readonly updated: Date;
    /**
     * When the image was first seen
     *
     * @readonly
     * @type {Date}
     * @memberof Image
     */
    readonly firstSeen: Date;
    /**
     * The name of the user that uploaded the image
     *
     * Use this instead of (await uploader()).name to save an HTTP request and make the Derpi admins happy
     *
     * @readonly
     * @type {string}
     * @memberof Image
     */
    readonly uploaderName: string;
    /**
     * The ID of the user that uploaded the image
     *
     * Use this instead of (await uploader()).id to save an HTTP request and make the Derpi admins happy
     *
     * @readonly
     * @type {number}
     * @memberof Image
     */
    readonly uploaderID: number;
    /**
     * The tag IDs on the image as returned from the API
     *
     * @private
     * @readonly
     * @type {number[]}
     * @memberof Image
     */
    private readonly _tags;
    /**
     * Gets the user that uploaded the image
     *
     * @returns {Promise<User>} A Promise wrapping the uploader's details
     * @memberof Image
     */
    uploader(): Promise<User>;
    /**
     * Gets the tags on the image
     *
     * @returns {Promise<TagCollection>} A Promise wrapping the tags on the image
     * @memberof Image
     */
    tags(): Promise<TagCollection>;
    /**
     * Gets the comments on the image
     *
     * @param {(number | undefined)} page The page number of comments to fetch (max appears to be total / 20 for non-logged-in users)
     * @returns {Promise<ImageComments>}
     * @memberof Image
     */
    comments(page: number | undefined): Promise<ImageComments>;
}
