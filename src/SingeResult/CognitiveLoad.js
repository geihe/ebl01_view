const cogLoadItemIds=['icl_1', 'icl_2','gcl_1','gcl_2',  'ecl_1','ecl_2','ecl_3','cognitive load']
export function CognitiveLoad(props) {
  const {row} = props;

  const cogLoadResults = cogLoadItemIds.map(item => row.filter(d => d.id === item));

  return <td title="cognitiveLoad">*</td>;
}

