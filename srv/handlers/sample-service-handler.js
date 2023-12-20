const cds = require("@sap/cds");
const LOG = cds.log('company.project.SampleServiceHandler');

class SampleServiceHandler extends cds.ApplicationService {

    /**
     * Class properties
     * 
     * Please note the usage of '#', the official documentation says: `Private properties are counterparts of the regular class properties which are public, including class fields, class methods, etc. Private properties get created by using a hash # prefix and cannot be legally referenced outside of the class. 
     * The privacy encapsulation of these class properties is enforced by JavaScript itself.`
     * 
     * Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
     */

    #sampleProperty;

    /**
     * Class constructors
     */

    constructor() {
        super(...arguments);

        this.#sampleProperty = null; // Set to a value
    }


    /**
     * srv. init()
     * Override this method in subclasses to register custom event handlers. 
     * You would usually derive this method from cds.ApplicationService
     * 
     * Ensure to call super.init() to allow subclasses to register their handlers. 
     * Do that after your registrations to go before the ones from subclasses, or before to have theirs go before yours.
     * 
     * Source: https://cap.cloud.sap/docs/node.js/core-services#srv-init
     */
    init() {
        /**
         * These properties provide convenient access to the CSN definitions of the entities, events and operations — that is actions and functions — exposed by this service.
         * 
         * Source: https://cap.cloud.sap/docs/node.js/core-services#entities
         */
        const { SampleView } = this.entities;
        const { SampleEvent } = this.events;
        const { } = this.operations;
        

        /**
         * Add your custom event hanlders here.
         * You can find some examples of custom event handlers below, look the documentation for more examples.
         * 
         * Source: https://cap.cloud.sap/docs/node.js/core-services#srv-on-before-after
         */
        this.before("READ", SampleView, this.handleBeforeReadSampleView.bind(this));
        this.on("READ", SampleView, this.handleOnReadSampleView.bind(this));
        this.after("READ", SampleView, this.handleAfterReadSampleView.bind(this));
        this.on("sampleAction", SampleView, this.handleOnSampleAction.bind(this));
        
        return super.init();
    }

    async handleBeforeReadSampleView(req){
        LOG.info(`Before READ SampleView req:(${req})`);
    }

    async handleOnReadSampleView(req){
        LOG.info(`On READ SampleView req:(${req})`);
    }

    async handleAfterReadSampleView(data, req){
        LOG.info(`After READ SampleView data:(${data}) req:(${req})`);
    }
    
    async handleOnSampleAction(req){
        LOG.info(`On sampleAction SampleView req:(${req})`);
    }

    /**
     * Getters
     */

    get sampleProperty() {
        return this.#sampleProperty;
    }

    /**
     * Setters
     */

    set sampleProperty(property1) {
        this.#sampleProperty = property1;
    }
}

module.exports = SampleServiceHandler;