export class Accumulator {
  constructor(logs) {
    this.logs = logs;
    const fb=logs.map(l => l.log[9]).filter(l=>l[8].log.length>0);
    console.log(logs);
  }

  accu = [
  ];



}