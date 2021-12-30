import {Rows} from "./Rows";
import {Analyzer} from "./Analyzer";
import {Accumulator} from "./Accumulator";

export function test(rawData) {
  const rowObject = (new Rows(rawData)).complete().sortDate().addNr();
  const ana = new Analyzer(rowObject.rows);
  const accu = new Accumulator(ana.logs);
}

