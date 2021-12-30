const postTestAutoIds = [
  ['Test_postMC_1', 'Test_postMC_3', 'Test_postMC_6', 'Test_postMC_7'],
  ['Test_postNT2step_1', 'Test_postNT2step_2', 'Test_postNT2step_3', 'Test_postNT2step_4'],
  ['Test_postFT2step_1', 'Test_postFT2step_2', 'Test_postFT2step_3', 'Test_postFT2step_4'],
  ['Test_postMC_1_draw3', 'Test_postMC_3_draw3', 'Test_postMC_6_draw3', 'Test_postMC_7_draw3'],
  ['Test_postConcept_1', 'Test_postConcept_2', 'Test_postConcept_3', 'Test_postConcept_4'],
  ['Test_pz-rvt1', 'Test_pz-rvt2', 'Test_pz-rvt3', 'Test_pz-rvt4', 'Test_pz-rvt5', 'Test_pz-rvt6', 'Test_pz-rvt7', 'Test_pz-rvt8'],
  ['Test_lw-rvt1', 'Test_lw-rvt2', 'Test_lw-rvt3', 'Test_lw-rvt4', 'Test_lw-rvt5', 'Test_lw-rvt6', 'Test_lw-rvt7', 'Test_lw-rvt8'],
]

export function extractPostTest(row) {
  const findFrame = (id) => row.filter(i => i.id === id).pop();
  const extract = ({id, log: {response, valid}}) => ({valid, id, response});
  const postTestAutoResults = postTestAutoIds.map(
    items => items.map(findFrame).map(extract)
  );
  return postTestAutoResults;
}

export function PostTestAuto(props) {
  const {row} = props;
  const postTestAutoResults = extractPostTest(row);

  return postTestAutoResults.flat().map(r => <td title={r.id + ' : ' + r.response}>{r.valid ? 1 : 0}</td>)
}
