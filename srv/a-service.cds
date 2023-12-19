// Namespace should follow the following format 'company.project.scope'
namespace company.project.service;

using {company.project.db as db} from '../db/schema';


service SampleService @(path: 'report') {

    entity SampleView as projection on db.SampleEntity {
        *
    } excluding {
        ID,
    } 

    @readonly
    entity SampleReadOnlyView as projection on db.SampleEntity {
        sampleUUID,
        sampleUInt8,
        sampleBoolean
    } 
    where sampleBoolean = true
    group by sampleBoolean
    order By sampleUUID

}