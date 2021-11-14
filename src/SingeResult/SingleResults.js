import {SingleResultRow} from "./SingleResultRow";

export function SingleResults(props) {
  const {complete}=props;
  const completeGrouped = {1: [], 2: [], 3: [], 4: []};
  complete.forEach(c => completeGrouped[c.group_id].push(c));



  return <table>
    <thead>
    <tr>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {complete.map((f, index) => <SingleResultRow key={index} data={f}/>)}
    </tbody>
  </table>;
}