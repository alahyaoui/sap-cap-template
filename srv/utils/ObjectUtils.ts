/**
 * Utility class for operations related to objects.
 */
export default class ObjectUtils {
    /**
     * Compares two objects deeply to determine if they are equivalent.
     * @param {Record<string, unknown>} object1 - The first object to compare.
     * @param {Record<string, unknown>} object2 - The second object to compare.
     * @returns {boolean} Returns `true` if the objects are deeply equal, `false` otherwise.
     */
    static isDeepEquals(object1: Record<string, unknown>, object2: Record<string, unknown>): boolean {
        const keysObject1 = Object.keys(object1);
        const keysObject2 = Object.keys(object2);

        if (keysObject1.length !== keysObject2.length) {
            return false;
        }

        for (const key of keysObject1) {
            const val1 = object1[key];
            const val2 = object2[key];

            const areObjects = this.isObject(val1) && this.isObject(val2);
            if (
                (areObjects && !this.isDeepEquals(val1 as Record<string, unknown>, val2 as Record<string, unknown>)) ||
                (!areObjects && val1 !== val2)
            ) {
                return false;
            }
        }

        return true;
    }

    /**
     * Determines whether a given value is an object.
     * @param {unknown} object - The value to check.
     * @returns {boolean} Returns `true` if the value is an object, `false` otherwise.
     */
    static isObject(object: unknown): boolean {
        return object != null && typeof object === "object";
    }
}
