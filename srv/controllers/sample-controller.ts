import { SampleService } from "../services";
import BaseController from "./base-controller";

export default class SampleController extends BaseController {
    private readonly sampleService: SampleService;

    constructor() {
        super(SampleController.name);
        this.sampleService = new SampleService();
    }

    async processSampleEntity() {
        await this.sampleService.processSampleEntity();
    }
}
