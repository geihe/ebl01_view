export function Feedback(props) {
  const {data} = props;
  const feedBackFrames = ['Feedback', 'GabEsSchwierigkeiten', 'Ernsthaft', 'Hilfsmittel'];
  const feedbackObjects = data.map(d => d.data.filter(o => feedBackFrames.includes(o.id)));
  const feedback = feedbackObjects.map(o => o.log?.feedbackAllgemein);
  const feedbackString = feedback.join('\n');

  return <>
    <h2>allgemeines Feedback</h2>
    <textarea defaultValue={feedbackString}/>
  </>;
}
