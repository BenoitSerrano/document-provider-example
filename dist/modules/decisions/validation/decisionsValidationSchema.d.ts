export { decisionsValidationSchema };
declare const decisionsValidationSchema: {
    $jsonSchema: {
        bsonType: string;
        additionalProperties: boolean;
        required: string[];
        properties: {
            _id: {
                bsonType: string;
            };
            blocOccultation: {
                bsonType: string;
            };
            chamberName: {
                bsonType: string;
            };
            chamberId: {
                bsonType: string;
            };
            dateDecision: {
                bsonType: string;
            };
            dateCreation: {
                bsonType: string;
            };
            decatt: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            formation: {
                bsonType: string;
            };
            jurisdictionName: {
                bsonType: string;
            };
            labelStatus: {
                bsonType: string;
                enum: string[];
            };
            labelTreatments: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                    additionalProperties: boolean;
                    properties: {
                        annotations: {
                            bsonType: string;
                            additionalProperties: boolean;
                            items: {
                                bsonType: string;
                                additionalProperties: boolean;
                                properties: {
                                    category: {
                                        bsonType: string;
                                    };
                                    entityId: {
                                        bsonType: string;
                                    };
                                    start: {
                                        bsonType: string;
                                    };
                                    text: {
                                        bsonType: string;
                                    };
                                };
                            };
                        };
                        source: {
                            bsonType: string;
                        };
                        order: {
                            bsonType: string;
                        };
                    };
                };
            };
            originalText: {
                bsonType: string;
            };
            pseudoText: {
                bsonType: string;
            };
            pubCategory: {
                bsonType: string;
            };
            publication: {
                bsonType: string;
                additionalProperties: boolean;
                items: {
                    bsonType: string;
                };
            };
            solution: {
                bsonType: string;
            };
            sourceId: {
                bsonType: string;
            };
            sourceName: {
                bsonType: string;
            };
        };
    };
};
