const cds = require("@sap/cds");

class SampleController extends cds.ApplicationService {

    /**
     * Class properties
     * 
     * Please note the usage of '#', the official documentation says: `Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc. Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class. 
     * The privacy encapsulation of these class properties is enforced by JavaScript itself.`
     * 
     * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
     */

    #property1;
    #property2;

    /**
     * Class constructors
     */

    constructor() {
        super(...arguments);

        this.#property1 = null; // Set to a value
        this.#property2 = null; // Set to a value
    }


    /**
     * srv. init()
     * Override this method in subclasses to register custom event handlers. 
     * You would usually derive this method from cds.ApplicationService
     * 
     * Ensure to call super.init() to allow subclasses to register their handlers. 
     * Do that after your registrations to go before the ones from subclasses, or before to have theirs go before yours.
     * 
     * https://cap.cloud.sap/docs/node.js/core-services#srv-init
     */
    init() {
        // Add your custom event hanlders here

        return super.init();
    }

    /**
     * Getters
     */

    get property1() {
        return this.#property1;
    }

    get property2() {
        return this.#property2;
    }

    /**
     * Setters
     */

    set property1(property1) {
        this.#property1 = property1;
    }

    set property2(property2) {
        this.#property2 = property2;
    }
}

module.exports = SampleController;