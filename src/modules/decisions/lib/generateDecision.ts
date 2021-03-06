import { buildObjectId } from '../../../utils';
import { decisionType } from '../decisionType';

export { generateDecision };

const MAX_RAND_NUMBER = 1000000;

function generateDecision(decisionFields: Partial<decisionType> = {}): decisionType {
  return {
    _id: buildObjectId(),
    chamberId: `CHAMBER_ID_${Math.random()}`,
    chamberName: `CHAMBER_NAME_${Math.random()}`,
    dateDecision: new Date().toISOString(),
    formation: `FORMATION_${Math.random()}`,
    jurisdictionName: `JURISDICTION_NAME_${Math.random()}`,
    labelStatus: 'toBeTreated',
    labelTreatments: [],
    originalText: `ORIGINAL_TEXT_${Math.random()}`,
    pseudoText: `PSEUDO_TEXT_${Math.random()}`,
    pubCategory: `PUB_CATEGORY_${Math.random()}`,
    solution: `SOLUTION_${Math.random()}`,
    sourceId: Math.floor(Math.random() * MAX_RAND_NUMBER),
    sourceName: `SOURCE_NAME_${Math.random()}`,
    ...decisionFields,
  };
}
