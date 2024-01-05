/**
 * Utility class for operations related to dates.
 */
export default class DateUtils {
    /**
     * Gets the previous date by subtracting one day from the given date string.
     *
     * @param {string} date - The date string to get the previous date from.
     * @returns {string} The previous date in the format 'YYYY-MM-DD'.
     */
    static getPreviousDate(date: string): string {
        const tmpDate = new Date(date);
        tmpDate.setDate(tmpDate.getDate() - 1);

        const year = tmpDate.getFullYear();
        const month = (tmpDate.getMonth() + 1).toString().padStart(2, "0");
        const day = tmpDate.getDate().toString().padStart(2, "0");
        const previousDate = year + "-" + month + "-" + day;
        return previousDate;
    }

    /**
     * Gets the next date by adding one day to the given date string.
     *
     * @param {string} date - The date string to get the next date from (format: 'YYYY-MM-DD').
     * @returns {string} The next date in the format 'YYYY-MM-DD'.
     */
    static getNextDate(date: string): string {
        const tmpDate = new Date(date);
        tmpDate.setDate(tmpDate.getDate() + 1);

        const year = tmpDate.getFullYear();
        const month = (tmpDate.getMonth() + 1).toString().padStart(2, "0");
        const day = tmpDate.getDate().toString().padStart(2, "0");
        const nextDate = year + "-" + month + "-" + day;
        return nextDate;
    }

    /**
     * Calculates the difference in days between two date strings.
     *
     * @param {string} dateFrom - The starting date string.
     * @param {string} dateTo - The ending date string.
     * @returns {number} The difference in days between the two dates.
     */
    static getDifferenceInDays(dateFrom: string, dateTo: string): number {
        const tmpDateFrom = new Date(dateFrom);
        const tmpDateTo = new Date(dateTo);
        const differenceInDays = (tmpDateTo.getTime() - tmpDateFrom.getTime()) / (1000 * 3600 * 24);
        return differenceInDays;
    }

    /**
     * Checks if the date range is valid, where the start date is earlier than the end date.
     *
     * @param {string} dateFrom - The starting date string.
     * @param {string} dateTo - The ending date string.
     * @returns {boolean} True if the date range is valid, otherwise false.
     */
    static isDateRangeValid(dateFrom: string, dateTo: string): boolean {
        const timestampDateFrom = Date.parse(dateFrom);
        const timestampDateTo = Date.parse(dateTo);
        return timestampDateFrom < timestampDateTo;
    }

    /**
     * This function compares two dates and returns the difference in milliseconds between them.
     * Returns a negative number, zero, or a positive number as the first argument is less than, equal to, or greater than the second.
     *
     * @param {string} date1 - The first date string to compare.
     * @param {string} date2 - The second date string to compare.
     * @returns {number} The difference in milliseconds between the two dates (date1 - date2)
     */
    static compare(date1: string, date2: string): number {
        const tmpDate1 = new Date(date1);
        const tmpDate2 = new Date(date2);

        const difference = tmpDate1.getTime() - tmpDate2.getTime();
        return difference;
    }

    /**
     * Checks if two dates are equal.
     *
     * @param {string} date1 - The first date string to compare.
     * @param {string} date2 - The second date string to compare.
     * @returns {boolean} Returns true if the two dates are equal, otherwise returns false.
     */
    static equals(date1: string, date2: string): boolean {
        return this.compare(date1, date2) === 0;
    }
}
