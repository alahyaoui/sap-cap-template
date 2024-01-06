/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UUID } from "crypto";
import BaseRepository from "./base-repository";

export default class SampleRepository extends BaseRepository {
    constructor() {
        super();
    }

    async getByID(id: UUID) {
        const { SampleEntity } = this.db.entities("company.project.db");

        this.log.info(`Getting SampleEntity with id:${id} from company.project.db`);

        const sampleEntity = await SELECT.one.from(SampleEntity).where`ID=${id}`;

        this.log.info(`Got entity:${sampleEntity}`);

        return sampleEntity;
    }
}
