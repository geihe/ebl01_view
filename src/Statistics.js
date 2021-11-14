import './App.css';

export function Statistics(props) {
  const {data} = props;
  const finished = data.filter(d => d.end);

  const counts = finished.reduce((p, c) => {
    const id = c.group_id;
    p[id].push(c);
    return p;
  }, {1: [], 2:[], 3: [], 4:[]});

  return (
    <div>
      <h1>EBL 01 - Auswertung 1</h1>

      <h2>Anzahl Experiment abgeschlossen:</h2>
      <table>
        <thead>
        <tr>
          <th> Gruppe 1</th>
          <th> Gruppe 2</th>
          <th> Gruppe 3</th>
          <th> Gruppe 4</th>
          <th> gesamt</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td> {counts[1].length}</td>
          <td> {counts[2].length}</td>
          <td> {counts[3].length}</td>
          <td> {counts[4].length}</td>
          <td> {finished.length}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

