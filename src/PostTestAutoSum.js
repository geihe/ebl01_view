import {extractPostTest} from "./SingeResult/PostTestAuto";

export function PostTestAutoSum(props) {
  const {row} = props;
  const postTestAutoResults = extractPostTest(row);
  const postTestSums = postTestAutoResults.map(a => a.reduce((acc, cur) =>
        ({
          title: acc.title + cur.id + ' -> ' + (cur.valid ? '1' : '0') + '\n',
          sum: acc.sum + (cur.valid ? 1 : 0),
          count: acc.count + 1
        })
      , {title: '', sum: 0, count: 0}
    )
  );
  const total = postTestSums.reduce((acc, cur) => ({
      sum: acc.sum + cur.sum,
      count: acc.count + cur.count
    }),
    {sum: 0, count: 0})
  const out = postTestSums.map((r, index) => <td key={index} title={r.title}>{r.sum / r.count * 100 + '%'}</td>)

  const result = [];

  return (<>
      <td title={'total'} style={{backgroundColor: '#aaffaa'}}>
        {(total.sum / total.count * 100).toFixed(1) + '%'}
      </td>
      {out}
    </>
  );
}
