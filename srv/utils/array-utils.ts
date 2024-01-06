/**
 * Utility class for operations related to arrays.
 */
export default class ArrayUtils {
    /**
     * Creates a new Set from the given array, removing any duplicate values.
     *
     * @template T - The type of the elements in the array.
     * @param {Array<T>} array - The array to convert to a Set.
     * @returns {Set<T>} - A new Set.
     */
    static convertToSet<T>(array: Array<T>): Set<T> {
        return new Set(array);
    }

    /**
     * Creates a new array from the given array, removing any duplicate values.
     *
     * @template T - The type of the elements in the array.
     * @param {Array<T>} array - The array to remove duplicates from.
     * @returns {Array<T>} - A new array with duplicates removed.
     */
    static createUniqueArray<T>(array: Array<T>): Array<T> {
        return [...new Set(array)];
    }

    /**
     * Creates a new array from the given array, removing any duplicate values.
     * This method works with arrays of objects by comparing the stringified versions of the objects.
     *
     * @template T - The type of the elements in the array.
     * @param {Array<T>} array - The array to remove duplicates from.
     * @returns {Array<T>} - A new array with duplicates removed.
     */
    static createDeeplyUniqueArray<T>(array: Array<T>): Array<T> {
        const map = new Map<string, boolean>();
        const uniqueArray: Array<T> = [];
        for (const item of array) {
            if (!map.has(JSON.stringify(item))) {
                map.set(JSON.stringify(item), true);
                uniqueArray.push(item);
            }
        }
        return uniqueArray;
    }
}
