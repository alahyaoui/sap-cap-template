import { log } from "@sap/cds";

const PACKAGE_NAME = "company.project.controllers";

export default abstract class BaseController {
    protected readonly log;

    constructor() {
        this.log = log(`${PACKAGE_NAME}.${new.target.name}`);
    }
}
