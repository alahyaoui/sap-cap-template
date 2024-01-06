/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ApplicationService, log } from "@sap/cds";

const PACKAGE_NAME = "company.project.handlers";

export default abstract class BaseHandler extends ApplicationService {
    protected readonly log;

    constructor(...args: any) {
        super(...args);
        this.log = log(`${PACKAGE_NAME}.${new.target.name}`);
    }
}
