import './App.css';
import {useEffect, useState} from "react";
import {GruppenBeschreibung} from "./GruppenBeschreibung";
import {Statistics} from "./Statistics";
import {Zeiten} from "./Zeiten";
import {SingleResults} from "./SingeResult/SingleResults";

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
  const complete =
    data.filter(d => d.end)
      .sort((a, b) => new Date(a.start) - new Date(b.start))
      .map((c, index) => ({...c, nr: index + 1}));


  return (
    <>
      <SingleResults complete={complete}/>
      <GruppenBeschreibung/>
      <Statistics data={data}/>
      <h2>Zeiten der abgeschlossenen Experimente</h2>
      <Zeiten data={complete}/>
      <h2>Zeiten der begonnenen Experimente</h2>
      <Zeiten data={data.filter(d => !d.end)}/>
    </>
  );
}

