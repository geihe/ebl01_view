import {PreTest} from "./PreTest";
import {IntroductionTest} from "./IntroductionTest";
import {SectionTimeList} from "./SectionTimes";

export function SingleResultRow(props) {
  const {data} = props;
  const row = JSON.parse(data.data);
  console.log(row);


  return (
    <tr>
      <td title={'Nr'}>{data.nr}</td>
      <td title={'Gruppe'}>{data.group_id}</td>
      <td>Zeit:</td>
      <SectionTimeList row={row}/>
      <IntroductionTest row={row}/>
      <td>Pretest:</td>
      <PreTest row={row}/>
    </tr>
  );
}