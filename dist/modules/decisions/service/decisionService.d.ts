import { decisionType, labelTreatmentsType } from '../decisionType';
export { decisionService };
declare const decisionService: {
    createDecision(decisionFields: Omit<decisionType, '_id' | '_rev' | 'labelStatus' | 'labelTreatments'>): Promise<void>;
    fetchDecisionsBySourceIdsAndSourceName(sourceIds: decisionType['sourceId'][], sourceName: decisionType['sourceName']): Promise<decisionType[]>;
    fetchPseudonymisationsToExport(): Promise<{
        decisionId: number;
        pseudoText: string;
    }[]>;
    fetchJurinetAndChainedJuricaDecisionsToPseudonymiseBetween({ startDate, endDate, }: {
        startDate: Date;
        endDate?: Date | undefined;
    }): Promise<decisionType[]>;
    updateDecisionsLabelStatus({ decisionIds, labelStatus, }: {
        decisionIds: Array<decisionType['_id']>;
        labelStatus: decisionType['labelStatus'];
    }): Promise<void>;
    updateDecisionPseudonymisation({ decisionId, decisionPseudonymisedText, labelTreatments, }: {
        decisionId: decisionType['_id'];
        decisionPseudonymisedText: string;
        labelTreatments: labelTreatmentsType;
    }): Promise<void>;
};
