export const ageInSeconds = dateString => (Date.now() - (new Date(dateString)).valueOf())/1000;


export class frameFilter {
  static id = (id) => (frame => frame.id === id);
}

export class logFilter {

}