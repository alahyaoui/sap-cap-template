import { log } from "@sap/cds";

const PACKAGE_NAME = "company.project.services";

export default abstract class BaseService {
    protected readonly log;

    constructor() {
        this.log = log(`${PACKAGE_NAME}.${new.target.name}`);
    }
}
