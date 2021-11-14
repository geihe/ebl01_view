import './App.css';
import {timeDiffString} from "./helper/timeHelper";

export function Zeiten(props) {
  const {data} = props;
  const timeData = data
    .map(d => ({...d, startDate: new Date(d.start), endDate: d.end ? new Date(d.end) : null}))
    .sort((a,b)=>b.startDate-a.startDate);

  return (
    <table>
      <thead>
      <tr>
        <th>Nr</th>
        <th>Gruppe</th>
        <th>Datum</th>
        <th>Startzeit</th>
        <th>Endzeit</th>
        <th>Dauer</th>
      </tr>
      </thead>
      <tbody>
      {timeData.map(d => (
        <tr key={d.start}>
          <td>{d.nr}</td>
          <td>{d.group_id}</td>
          <td>{d.startDate.toLocaleDateString()}</td>
          <td>{d.startDate.toLocaleTimeString()}</td>
          <td>{d.endDate ? d.endDate.toLocaleTimeString() : null}</td>
          <td>{timeDiffString(d.startDate, d.endDate)}</td>
        </tr>
      ))}
      </tbody>
    </table>);
}

