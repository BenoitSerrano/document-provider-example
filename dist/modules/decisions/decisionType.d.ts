import { mongoIdType } from '../../utils';
export type { decisionType, labelTreatmentsType };
declare type decisionType = {
    _id: mongoIdType;
    blocOccultation?: number;
    chamberId: string;
    chamberName: string;
    dateCreation?: string;
    dateDecision?: string;
    decatt?: number[];
    formation?: string;
    jurisdictionName: string;
    labelStatus: 'toBeTreated' | 'loaded' | 'done' | 'exported';
    labelTreatments: labelTreatmentsType;
    originalText: string;
    occultation?: {
        additionalTerms: string;
        categoriesToOmit: string[];
    };
    pseudoText: string;
    pubCategory: string;
    publication?: string[];
    solution: string;
    sourceId: number;
    sourceName: string;
};
declare type labelTreatmentsType = Array<{
    annotations: Array<{
        category: string;
        entityId: string;
        start: number;
        text: string;
    }>;
    source: string;
    order: number;
}>;
