using {company.project.service.SampleService} from './a-service';

annotate SampleService.SampleView with {
    sampleUUID        @readonly;
    sampleBinary           @readonly;
    sampleLargeBinary @readonly;
    sampleLargeString    @readonly;
};

annotate SampleService.SampleView with @Capabilities : {
    InsertRestrictions.Insertable : true,
    UpdateRestrictions.Updatable  : true,
    DeleteRestrictions.Deletable  : false
};