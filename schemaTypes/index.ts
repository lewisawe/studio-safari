// studio-safari/schemaTypes/index.ts
//
// Single list of every schema type (design §9 structure). Object types (claim,
// resolution) are registered alongside the document types so the inline
// `type: "claim"` / `type: "resolution"` references in contradiction.ts resolve.

import { source } from "./source";
import { pointsCurrency } from "./pointsCurrency";
import { program } from "./program";
import { transferPartner } from "./transferPartner";
import { awardChartEntry } from "./awardChartEntry";
import { contradiction } from "./contradiction";
import { userDecision } from "./userDecision";
import { claim } from "./claim";
import { resolution } from "./resolution";

export const schemaTypes = [
  // Document types
  source,
  pointsCurrency,
  program,
  transferPartner,
  awardChartEntry,
  contradiction,
  userDecision,
  // Inline object types
  claim,
  resolution,
];
