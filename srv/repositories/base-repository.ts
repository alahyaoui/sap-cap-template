import cds, { Service, log } from "@sap/cds";

const PACKAGE_NAME = "company.project.repositories";

export default abstract class BaseRepository {
    protected readonly log;

    protected db!: Service;

    constructor(className: string) {
        this.log = log(`${PACKAGE_NAME}.${className}`);
        void this.connect();
    }

    private async connect() {
        this.db = this.db ?? (this.db = await cds.connect.to("db"));
    }
}
