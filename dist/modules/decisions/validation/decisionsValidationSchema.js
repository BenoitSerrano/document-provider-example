"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decisionsValidationSchema = void 0;
var decisionsValidationSchema = {
    $jsonSchema: {
        bsonType: 'object',
        additionalProperties: false,
        required: ['labelStatus', 'labelTreatments', 'originalText', 'sourceId'],
        properties: {
            _id: { bsonType: 'objectId' },
            chamberName: { bsonType: 'string' },
            dateDecision: { bsonType: 'date' },
            dateCreation: { bsonType: 'date' },
            decatt: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'number',
                },
            },
            jurisdictionName: { bsonType: 'string' },
            labelStatus: { bsonType: 'string', enum: ['toBeTreated', 'loaded', 'done', 'exported'] },
            labelTreatments: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'object',
                    additionalProperties: false,
                    properties: {
                        annotations: {
                            bsonType: 'array',
                            additionalProperties: false,
                            items: {
                                bsonType: 'object',
                                additionalProperties: false,
                                properties: {
                                    category: { bsonType: 'string' },
                                    entityId: { bsonType: 'string' },
                                    start: { bsonType: 'int' },
                                    text: { bsonType: 'string' },
                                },
                            },
                        },
                        source: { bsonType: 'string' },
                        order: { bsonType: 'int' },
                    },
                },
            },
            originalText: { bsonType: 'string' },
            pseudoText: { bsonType: 'string' },
            pubCategory: { bsonType: 'string' },
            publication: {
                bsonType: 'array',
                additionalProperties: false,
                items: {
                    bsonType: 'string',
                },
            },
            sourceId: { bsonType: 'number' },
            sourceName: { bsonType: 'string' },
        },
    },
};
exports.decisionsValidationSchema = decisionsValidationSchema;
