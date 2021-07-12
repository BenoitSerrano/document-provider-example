import { omit } from 'lodash';
import { generateDecision } from './generateDecision';
import { buildDecision } from './buildDecision';

describe('buildDecision', () => {
  it('should build a decision with an empty labelTreatments', async () => {
    const decisionField = omit(generateDecision(), ['_id', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.labelTreatments).toEqual([]);
  });

  it(`should build a decision with a 'toBeTreated' label status`, async () => {
    const decisionField = omit(generateDecision(), ['_id', 'labelTreatments']);

    const decision = buildDecision(decisionField);

    expect(decision.labelStatus).toEqual('toBeTreated');
  });
});
