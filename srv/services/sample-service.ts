import { UUID } from "crypto";
import { SampleRepository } from "../repositories";
import BaseService from "./base-service";

export default class SampleService extends BaseService {
    private readonly sampleRepository: SampleRepository;

    constructor() {
        super(SampleService.name);
        this.sampleRepository = new SampleRepository();
    }

    async processSampleEntity() {
        const mockID: UUID = "c13a84d6-c42b-4ecf-b70b-79de81560ba8";
        await this.sampleRepository.getByID(mockID);
    }
}
