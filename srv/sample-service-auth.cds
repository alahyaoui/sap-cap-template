using {company.project.service.SampleService} from './sample-service';

annotate SampleService with @(requires: 'authenticated-user');

annotate SampleService.SampleView with 
    @restrict: [{grant: [
        'READ',
        'CREATE',
        'UPDATE'
    ]}];

annotate SampleService.SampleReadOnlyView with 
    @(restrict: [{grant: ['READ']}]);