/**
 * Represents the various representations (heh) of an image
 *
 * @export
 * @class ImageRepresentations
 */
export declare class ImageRepresentations {
    /**
     * The smallest rendered size of the image
     *
     * Dimensions: 50x50
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly thumbnailTiny: string;
    /**
     * A 150x150 thumbnail for the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly thumbnailSmall: string;
    /**
     * A 250x250 thumbnail for the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly thumbnail: string;
    /**
     * An approximately 300x300 rendering of the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly small: string;
    /**
     * An approximately 750x750 rendering of the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly medium: string;
    /**
     * An approximately 1500x1500 rendering of the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly large: string;
    /**
     * An approximately 1024x1024 (?) rendering of the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly tall: string;
    /**
     * A source-quality rendering of the image
     *
     * @readonly
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly full: string;
    /**
     * A WEBM rendering of the image, if it's a gif or webm upload
     *
     * Optional
     *
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly webm?: string;
    /**
     * An MP4 rendering of the image, if it's a gif or webm upload
     *
     * Optional
     *
     * @type {string}
     * @memberof ImageRepresentations
     */
    readonly mp4?: string;
}
