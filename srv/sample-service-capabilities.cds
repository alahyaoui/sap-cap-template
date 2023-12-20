using {company.project.service.SampleService} from './sample-service';

annotate SampleService.SampleView with {
    sampleBinary           @readonly;
    sampleLargeBinary @readonly;
    sampleLargeString    @readonly;
};

annotate SampleService.SampleView with @Capabilities : {
    InsertRestrictions.Insertable : true,
    UpdateRestrictions.Updatable  : true,
    DeleteRestrictions.Deletable  : false
};