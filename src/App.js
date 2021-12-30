import './App.css';
import {useEffect, useState} from "react";
import {GruppenBeschreibung} from "./GruppenBeschreibung";
import {Statistics} from "./Statistics";
import {Zeiten} from "./Zeiten";
import {SingleResults} from "./SingeResult/SingleResults";
import {Feedback} from "./Feedback";
import {test} from "./test";
import {Rows} from "./Rows";

export function App() {
  const baseURL = 'https://beispielbasiertes-lernen.de/rest/EBL/';
  const dataURL = baseURL + 'data.php';
  useEffect(() =>
      fetch(dataURL)
        .then(response => response.json())
        .then(data => setData(data)),
    []
  );

  const [data, setData] = useState([]);
  const meta = data[0];
  const rows = new Rows(data);
  const complete = rows.complete().sortDate().addNr().rows;

  test(data);

  return (
    <>
      <GruppenBeschreibung/>
      <Feedback data={complete}/>
      <Statistics data={data}/>
      <h2>Zeiten der abgeschlossenen Experimente</h2>
      <Zeiten data={complete}/>
      <hr/>
      <SingleResults complete={complete}/>
      <hr/>
      <h2>Zeiten der begonnenen Experimente</h2>
      <Zeiten data={data}/>
    </>
  );
}

