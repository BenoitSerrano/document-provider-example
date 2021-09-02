"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDecision = void 0;
var utils_1 = require("../../../utils");
var MAX_RAND_NUMBER = 1000000;
function generateDecision(decisionFields) {
    if (decisionFields === void 0) { decisionFields = {}; }
    return __assign({ _id: utils_1.buildObjectId(), chamberId: "CHAMBER_ID_" + Math.random(), chamberName: "CHAMBER_NAME_" + Math.random(), dateDecision: new Date().toISOString(), formation: "FORMATION_" + Math.random(), jurisdictionName: "JURISDICTION_NAME_" + Math.random(), labelStatus: 'toBeTreated', labelTreatments: [], originalText: "ORIGINAL_TEXT_" + Math.random(), pseudoText: "PSEUDO_TEXT_" + Math.random(), pubCategory: "PUB_CATEGORY_" + Math.random(), solution: "SOLUTION_" + Math.random(), sourceId: Math.floor(Math.random() * MAX_RAND_NUMBER), sourceName: "SOURCE_NAME_" + Math.random() }, decisionFields);
}
exports.generateDecision = generateDecision;
