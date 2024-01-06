/*** REMOVE THOSE ESLINT WARNINGS DISABLERS WHEN IMPLEMENTING YOUR SERVICE ***/
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SampleController } from "../controllers";
import BaseHandler from "./base-handler";

/**
 * This class extends the ApplicationService from @sap/cds.
 * It provides custom handling for certain events related to the SampleView entity.
 */
export default class SampleServiceHandler extends BaseHandler {
    private readonly sampleController: SampleController;

    /**
     * The constructor initializes the sampleController to null.
     */
    constructor(...args: any[]) {
        super(SampleServiceHandler.name, ...args);
        this.sampleController = new SampleController(); // Set to a value
    }

    /**
     * This method is called during the initialization of the service.
     * It registers custom event handlers for the SampleView entity.
     */
    init(): Promise<void> {
        const { SampleView } = this.entities;
        const { SampleEvent } = this.events;
        const {} = this.operations;

        this.before("READ", SampleView, this.handleBeforeReadSampleView.bind(this));
        this.on("READ", SampleView, this.handleOnReadSampleView.bind(this));
        this.after("READ", SampleView, this.handleAfterReadSampleView.bind(this));
        this.on("sampleAction", SampleView, this.handleOnSampleAction.bind(this));

        return super.init();
    }

    /**
     * This method handles the "BEFORE READ" event for the SampleView entity.
     * @param req The request object.
     */
    async handleBeforeReadSampleView(req: any): Promise<void> {
        this.log.info(`Before READ SampleView req:(${req})`);
    }

    /**
     * This method handles the "ON READ" event for the SampleView entity.
     * @param req The request object.
     */
    async handleOnReadSampleView(req: any): Promise<void> {
        this.log.info(`On READ SampleView req:(${req})`);
        await this.sampleController.processSampleEntity();
    }

    /**
     * This method handles the "AFTER READ" event for the SampleView entity.
     * @param data The data returned from the read operation.
     * @param req The request object.
     */
    async handleAfterReadSampleView(data: any, req: any): Promise<void> {
        // Replace 'any' with the appropriate type
        this.log.info(`After READ SampleView data:(${data}) req:(${req})`);
    }

    /**
     * This method handles the "sampleAction" event for the SampleView entity.
     * @param req The request object.
     */
    async handleOnSampleAction(req: any): Promise<void> {
        this.log.info(`On sampleAction SampleView req:(${req})`);
    }
}
