import { Collection } from './Collection';
import { Tag } from '../api/Tag';
/**
 * A collection of tags - helpful for fetching a list of tags while only making enough HTTP requests to satisfy needs
 *
 * @export
 * @class TagCollection
 * @extends {Collection<number, Tag>}
 */
export declare class TagCollection extends Collection<number, Tag> {
    get(id: number): Promise<Tag>;
}
