import {SingleResultRow} from "./SingleResultRow";

export function SingleResults(props) {
  const {complete}=props;
  const completeGrouped = [[],[],[],[],[],]
  complete.forEach(c => completeGrouped[c.group_id].push(c));

  return <table>
    <caption><h3>Mauszeiger auf einzelnen Zellen zeigt zusätzliche Informationen</h3></caption>
    <thead>
    <tr>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {completeGrouped[1].map((f, index) => <SingleResultRow key={index} data={f}/>)}
    {completeGrouped[2].map((f, index) => <SingleResultRow key={index} data={f}/>)}
    {completeGrouped[3].map((f, index) => <SingleResultRow key={index} data={f}/>)}
    {completeGrouped[4].map((f, index) => <SingleResultRow key={index} data={f}/>)}
    </tbody>
  </table>;
}