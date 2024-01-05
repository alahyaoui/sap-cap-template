/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import ObjectUtils from "./ObjectUtils";

export default class EntityUtils {
    static isDeepEquals(entity1, entity2) {
        this.cleanProperties(entity1, entity2);

        return ObjectUtils.isDeepEquals(entity1, entity2);
    }

    static cleanDraftProperties(entity) {
        delete entity.IsActiveEntity;
        delete entity.HasActiveEntity;
        delete entity.HasDraftEntity;
        delete entity.DraftAdministrativeData_DraftUUID;
    }

    static cleanProperties(...entities) {
        for (const entity of entities) {
            this.cleanDraftProperties(entity);
            delete entity.createdAt;
            delete entity.createdBy;
        }
    }
}
