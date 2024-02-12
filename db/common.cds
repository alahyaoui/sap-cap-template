namespace company.project.common;

using {
  sap,
  cuid,
  managed,
  temporal,
  Currency,
  Language,
  Country,
  sap.common.CodeList as CodeList,
} from '@sap/cds/common';

/**
 * Entities are structured types with named and typed elements, representing sets of (persisted) data that can be read and manipulated using usual CRUD operations.
 * They usually contain one or more designated primary key elements.
 *
 * source: https://cap.cloud.sap/docs/cds/cdl#entity-definitions-%E2%80%94-define-entity
 */

// ------------------------------------------------------------------------------------
//  Entities
// ------------------------------------------------------------------------------------

entity SampleCommonEntity : cuid, managed, temporal {
  propertyString : String;
}

/**
 * CDS's aspects allow to flexibly extend definitions by new elements as well as overriding properties and annotations.
 * They're based on a mixin approach as known from Aspect-oriented Programming methods.
 *
 * source: https://cap.cloud.sap/docs/cds/cdl#aspects
 */

// ------------------------------------------------------------------------------------
//  Aspects
// ------------------------------------------------------------------------------------

aspect SampleAspect1 {
  propertyString  : String;
  propertyInteger : Integer;
}

aspect SampleAspect2 : managed, temporal {
  propertyString  : String;
  propertyInteger : Integer;
}

/**
 * You can declare custom types to reuse later on, for example, for elements in entity definitions.
 * Custom-defined types can be simple, that is derived from one of the predefined types, structure types or Associations.
 *
 * source: https://cap.cloud.sap/docs/cds/cdl#type-definitions-%E2%80%94-define-type
 */

// ------------------------------------------------------------------------------------
//  Types
// ------------------------------------------------------------------------------------

type SampleStringType      : String(255);
type SampleAssociationType : Association to SampleCommonEntity;

type SampleStructuredType {
  decimalProperty  : Decimal(10, 3);
  currencyProperty : Currency;
}

type SampleArrayedType     : array of {
  property : String;
}

type SampleCodeListType    : Association to SampleCodeList;

// ------------------------------------------------------------------------------------
//  Code Lists
// ------------------------------------------------------------------------------------

@cds.odata.valuelist
entity SampleCodeList : CodeList {
  key code : String(20);
}
