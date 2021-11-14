
export function PreTest(props) {
  const {row} = props;

  const preTestItems = [
    'pre1step_2',
    'pre1step_3',
    'pre1step_1',
    'pre1step_4',
    'preMulti_4',
    'preMulti_1',
    'preMulti_2',
    'preMulti_3',
    'postMC_1',
    'postMC_3',
    'postMC_6',
    'postMC_7',
  ];
  const preTestPrepare = row.filter(d => preTestItems.includes(d?.log?.stimulus))
    .map(d => ({id:d.log.stimulus, response: d.log.response, valid: d.log.valid}));

  const preTestResults = []
  preTestResults.push(preTestPrepare.slice(0,4));
  preTestResults.push(preTestPrepare.slice(4,8));
  preTestResults.push(preTestPrepare.slice(8,12));

  const preTest = preTestResults.map(pt => pt.reduce( (acc, cur)=> cur.valid ? acc+1 :acc  , 0));
  const preTestText = Math.round((preTest[0]+preTest[1]+preTest[2])/12*100) + '%';
  const preTestTitle = `Richtige Antworten im Pretest (${preTest[0]} + ${preTest[1]} + ${preTest[2]}) von 12`

  return <td title={preTestTitle}>{preTestText}</td>;
}

