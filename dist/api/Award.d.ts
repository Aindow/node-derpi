/**
 * Represents the various awards (badges) on user profiles
 *
 * @export
 * @class Award
 */
export declare class Award {
    /**
     * The title of the award
     *
     * @readonly
     * @type {string}
     * @memberof Award
     */
    readonly title: string;
    /**
     * The internal ID of the award
     *
     * @readonly
     * @type {number}
     * @memberof Award
     */
    readonly id: number;
    /**
     * The award's description, if any
     *
     * @readonly
     * @type {string?}
     * @memberof Award
     */
    readonly label: string;
    /**
     * The date this award was achieved by the user
     *
     * @readonly
     * @type {Date}
     * @memberof Award
     */
    readonly awarded: Date;
    /**
     * The image URL for the ward
     *
     * @readonly
     * @type {string}
     * @memberof Award
     */
    readonly image: string;
}
