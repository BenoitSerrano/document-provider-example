import { collectionType } from '../collectionType';
import { decisionType } from './decisionType';
import { buildDecision, generateDecision } from './lib';
export { decisionModule };
export type { decisionType };
declare const decisionModule: {
    buildRepository: typeof import("./repository/buildDecisionFakeRepository").buildDecisionFakeRepository;
    collection: collectionType<decisionType>;
    lib: {
        buildDecision: typeof buildDecision;
        generateDecision: typeof generateDecision;
    };
    service: {
        createDecision(decisionFields: Pick<decisionType, "blocOccultation" | "chamberId" | "chamberName" | "dateCreation" | "dateDecision" | "decatt" | "formation" | "jurisdictionName" | "originalText" | "occultation" | "pseudoText" | "pubCategory" | "publication" | "solution" | "sourceId" | "sourceName">): Promise<void>;
        fetchDecisionsBySourceIdsAndSourceName(sourceIds: number[], sourceName: string): Promise<decisionType[]>;
        fetchPseudonymisationsToExport(): Promise<{
            decisionId: number;
            pseudoText: string;
        }[]>;
        fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({ startDate, endDate, }: {
            startDate: Date;
            endDate?: Date | undefined;
        }): Promise<decisionType[]>;
        updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
            decisionIds: import("bson").ObjectId[];
            labelStatus: "done" | "toBeTreated" | "loaded" | "exported";
        }): Promise<void>;
        updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
            decisionId: import("bson").ObjectId;
            decisionPseudonymisedText: string;
            labelTreatments: import("./decisionType").labelTreatmentsType;
        }): Promise<void>;
    };
};
