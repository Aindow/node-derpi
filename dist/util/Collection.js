"use strict";
// tslint:disable: await-promise
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
/**
 * A readonly collection type
 *
 * @export
 * @abstract
 * @class Collection
 * @template T1 The type of keys in the collection
 * @template T2 The type of values in the collection
 */
class Collection {
    constructor(keys) {
        this._cache = new Map();
        this._pointer = 0;
        this._ids = keys;
    }
    /**
     * Gets a random element from the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    random() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._ids.length === 0)
                return null;
            const random = this._ids[Math.floor(Math.random() * this._ids.length)];
            return this.get(random);
        });
    }
    /**
     * Gets the first item in the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._ids.length === 0)
                return null;
            const first = this._ids[0];
            return this.get(first);
        });
    }
    /**
     * Gets the last item in the collection
     *
     * @returns {(Promise<T2 | null>)} A Promise wrapping the retrieved value (null if no items in the collection)
     * @memberof Collection
     */
    last() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._ids.length === 0)
                return null;
            const last = this._ids[this._ids.length - 1];
            return this.get(last);
        });
    }
    /**
     * Finds the first item in the collection matching some condition
     *
     * @param {(value: T2) => boolean} fn The function to filter elements with
     * @returns {(Promise<T2 | null>)} The found value (null if no items in the collection that match)
     * @memberof Collection
     */
    find(fn) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    if (fn(value))
                        return value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return null;
        });
    }
    /**
     * Maps all elements of the collection over some function
     *
     * @template T The type of array to return
     * @param {(value: T2) => T} fn The function to map to every element in the collection
     * @returns {Promise<T[]>} A Promise wrapping the array returned
     * @memberof Collection
     */
    map(fn) {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function* () {
            let arr = [];
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    arr.push(fn(value));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return arr;
        });
    }
    /**
     * Returns true if some of the elements in the collection match some conditional function
     *
     * @param {(value: T2) => boolean} fn The function used to check each element
     * @returns {Promise<boolean>} A Promise wrapping a boolean stating whether or not the condition matched at least one element
     * @memberof Collection
     */
    some(fn) {
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    if (fn(value))
                        return true;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        });
    }
    /**
     * Returns true if every element in the collection matches some conditional
     *
     * @param {(value: T2) => boolean} fn The function used to check each element
     * @returns {Promise<boolean>} A Promise wrapping a boolean stating whether or not the condition matched every element
     * @memberof Collection
     */
    every(fn) {
        var e_4, _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this._ids.length === 0)
                return false;
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    if (!fn(value))
                        return false;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return true;
        });
    }
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
    reduce(fn, initialAcc) {
        var e_5, _a;
        return __awaiter(this, void 0, void 0, function* () {
            let acc = initialAcc;
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    fn(acc, value);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return acc;
        });
    }
    /**
     * Identical to map, but returns this instead of an array
     *
     * @see map
     * @param {(value: T2) => any} fn The function to map over each element
     * @returns {Promise<Collection<T1, T2>>} The current collection
     * @memberof Collection
     */
    tap(fn) {
        var e_6, _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (var _b = __asyncValues(this), _c; _c = yield _b.next(), !_c.done;) {
                    const value = _c.value;
                    fn(value);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return this;
        });
    }
    /**
     * Fetches the next element in the collection, as well as whether or not iteration is done
     *
     * @returns {Promise<IteratorResult<T2>>} The next element
     * @memberof Collection
     */
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._pointer >= this._ids.length) {
                /* tslint:disable-next-line */
                return {
                    done: true,
                    value: undefined
                };
            }
            return {
                done: false,
                value: yield this.get(this._ids[this._pointer++])
            };
        });
    }
    [Symbol.asyncIterator]() {
        return this;
    }
}
exports.Collection = Collection;
