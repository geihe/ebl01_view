import {PreTest} from "./PreTest";
import {IntroductionTest} from "./IntroductionTest";
import {SectionTimeList} from "./SectionTimes";
import {CognitiveLoad} from "./CognitiveLoad";
import {PostTestAutoSum} from "../PostTestAutoSum";

export function SingleResultRow(props) {
  const {data} = props;
  const row = data.data;

  return (
    <tr>
      <td title={'Nr'}>{data.nr}</td>
      <td title={'Gruppe'}>{data.group_id}</td>
      <td>Zeit:</td>
      <SectionTimeList row={row}/>
      <IntroductionTest row={row}/>
      <td>Pretest:</td>
      <PreTest row={row}/>
      <td>cognitive load</td>
      <CognitiveLoad row={row} />
      <td>post tests sum</td>
      <PostTestAutoSum row={row} />
      {/*<td>post tests</td>*/}
      {/*<PostTestAuto row={row} />*/}

    </tr>
  );
}