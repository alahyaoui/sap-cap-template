// Namespace should follow the following format 'company.project.scope'
namespace company.project.service;

using {company.project.db as db} from '../db/schema';

@impl : './handlers/sample-service-handler'
service SampleService @(path: 'sample') {

    entity SampleView as projection on db.SampleEntity {
        *
    } excluding {
        sampleUUID,
    } actions {
        action sampleAction ( id: UUID, bool: Boolean );
    }

    @readonly
    entity SampleReadOnlyView as projection on db.SampleEntity {
        sampleUUID,
        sampleUInt8,
        sampleBoolean
    } 
    where sampleBoolean = true
    group by sampleUUID
    order By sampleUInt8

    event SampleEvent: { id: UUID; bool: Boolean };
}