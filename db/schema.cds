namespace company.project.scope;

using {
    sap,
    cuid
} from '@sap/cds/common';

using {
    company.project.common.SampleAspect1,
    company.project.common.SampleAspect2,
    company.project.common.SampleCommonEntity,
    company.project.common.SampleAssociationType,
    company.project.common.SampleArrayedType,
    company.project.common.SampleCodeListType,
} from '../db/common';


entity SampleEntity : cuid, SampleAspect1 {

    //======================================================================//
    // Built-in Types (https://cap.cloud.sap/docs/cds/types#built-in-types) //
    //======================================================================//

    sampleUUID            : UUID; // an opaque string | example: 'be071623-8699-4106-...' | sql: NVARCHAR(36)

    sampleBoolean         : Boolean; // a boolean | example: true or false | sql: BOOLEAN

    sampleUInt8           : UInt8; // an unsigned integer number stored with 8 bit | example: 0 to 255 | sql: TINYINT

    sampleInt16           : Int16; // an integer number stored with 16 bit | example: -32768 to 32767 | sql: SMALLINT

    sampleInt32           : Int32; // an integer number stored with 32 bit | example: -2,147,483,648 to 2,147,483,647 | sql: INTEGER

    sampleInteger         : Integer; // same as previous

    sampleInt64           : Int64; // an integer number stored with 64 bit | example: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | sql: BIGINT

    sampleInteger64       : Integer64; // same as previous

    sampleDecimal         : Decimal(10, 2); // a decimal number, usage -> 'Decimal(precision, scale)' | example: 15.2 | sql: DECIMAL

    sampleDouble          : Double; // a double number | example: DOUBLE 2.2250738585072014E-308 to 1.79769313486231570e+308d | sql: DOUBLE

    sampleDate            : Date; // a date | example: '2021-06-27'	| sql: DATE

    sampleTime            : Time; // a time | example: '07:59:59' | sql: TIME

    sampleDateTime        : DateTime; // a Timestamp with second precision | example: '2021-06-27T14:52:23Z' | sql: TIMESTAMP

    sampleTimestamp       : Timestamp; // a Timestamp with µs precision | example: '2021-06-27T14:52:23.123Z' | sql: TIMESTAMP

    sampleString          : String; // a String, usage -> 'String(length)' or 'String' for default length of 5000 (HANA) or 255 (Others) | example: 'hello world' | sql: NVARCHAR

    sampleBinary          : Binary; // a String used to store binary data, usage  | example: '0001 1100 1011 0101...' | sql: VARBINARY

    sampleLargeBinary     : LargeBinary; //	a String used to store BLOBs | example: '0001 1100 1011 0101...' | sql: BLOB

    sampleLargeString     : LargeString; // a Large String | example: 'Lorem Ipsum...' | sql: NCLOB

    //=====================================================//
    // My own defined entities, aspects, types, code lists //
    //=====================================================//

    sampleCommonEntity    : Association to one SampleCommonEntity;
    SampleAspect2         : Composition of one SampleAspect2;
    sampleAssociationType : SampleAssociationType;
    sampleArrayedType     : SampleArrayedType;
    sampleCodeList        : SampleCodeListType;
}
