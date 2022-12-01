/**
 * A readonly collection type
 *
 * @export
 * @abstract
 * @class Collection
 * @template T1 The type of keys in the collection
 * @template T2 The type of values in the collection
 */
export declare abstract class Collection<T1, T2> implements AsyncIterable<T2> {
    protected _cache: Map<T1, T2>;
    protected _pointer: number;
    protected _ids: T1[];
    constructor(keys: T1[]);
    /**
     * Gets an element from the collection by its key
     *
     * @abstract
     * @param {T1} id The key of the element to get
     * @returns {Promise<T2>} A Promise wrapping the retrieved item
     * @memberof Collection
     */
    abstract get(id: T1): Promise<T2>;
    /**
     * Gets a random element from the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    random(): Promise<T2 | null>;
    /**
     * Gets the first item in the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    first(): Promise<T2 | null>;
    /**
     * Gets the last item in the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    last(): Promise<T2 | null>;
    /**
     * Finds the first item in the collection matching some condition
     *
     * @param {(value: T2) => boolean} fn The function to filter elements with
     * @returns {(Promise<T2 | null>)} The found value (null if no items in the collection that match)
     * @memberof Collection
     */
    find(fn: (value: T2) => boolean): Promise<T2 | null>;
    /**
     * Maps all elements of the collection over some function
     *
     * @template T The type of array to return
     * @param {(value: T2) => T} fn The function to map to every element in the collection
     * @returns {Promise<T[]>} A Promise wrapping the array returned
     * @memberof Collection
     */
    map<T>(fn: (value: T2) => T): Promise<T[]>;
    /**
     * Returns true if some of the elements in the collection match some conditional function
     *
     * @param {(value: T2) => boolean} fn The function used to check each element
     * @returns {Promise<boolean>} A Promise wrapping a boolean stating whether or not the condition matched at least one element
     * @memberof Collection
     */
    some(fn: (value: T2) => boolean): Promise<boolean>;
    /**
     * Returns true if every element in the collection matches some conditional
     *
     * @param {(value: T2) => boolean} fn The function used to check each element
     * @returns {Promise<boolean>} A Promise wrapping a boolean stating whether or not the condition matched every element
     * @memberof Collection
     */
    every(fn: (value: T2) => boolean): Promise<boolean>;
    /**
     * Reduces the collection into some value
     *
     * Similar to Array#reduce
     *
     * @template T The type of the accumulator
     * @param {(acc: T, value: T2) => T} fn The function used to reduce each element ()
     * @param {T} initialAcc The initial value for the accumulator
     * @returns {Promise<T>} A Promise wrapping the final accumulator value
     * @memberof Collection
     */
    reduce<T>(fn: (acc: T, value: T2) => T, initialAcc: T): Promise<T>;
    /**
     * Identical to map, but returns this instead of an array
     *
     * @see map
     * @param {(value: T2) => any} fn The function to map over each element
     * @returns {Promise<Collection<T1, T2>>} The current collection
     * @memberof Collection
     */
    tap(fn: (value: T2) => any): Promise<Collection<T1, T2>>;
    /**
     * Fetches the next element in the collection, as well as whether or not iteration is done
     *
     * @returns {Promise<IteratorResult<T2>>} The next element
     * @memberof Collection
     */
    next(): Promise<IteratorResult<T2>>;
    [Symbol.asyncIterator](): AsyncIterableIterator<T2>;
}
