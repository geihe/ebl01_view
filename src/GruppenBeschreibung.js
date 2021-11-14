import './App.css';

export function GruppenBeschreibung(props) {
  const {data} = props;

  return (<div>
      <h1>Gruppenbeschreibung</h1>
        <ol>
          <li> blocked-sequential</li>
          <li> interleaved-sequential</li>
          <li> blocked-simultaneous</li>
          <li> interleaved-simultaneous</li>
        </ol>
    </div>
  );
}

