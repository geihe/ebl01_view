
export function IntroductionTest(props) {
  const {row} = props;
  const anzahlInstructionTest = row.filter(d => d.id === "InstructionTest").length;

  return <td title="Anzahl Versuche beim Instruktionstest">{anzahlInstructionTest}</td>;
}

