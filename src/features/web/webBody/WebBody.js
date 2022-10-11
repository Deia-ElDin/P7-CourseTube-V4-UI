import { useAppSelector } from '../../../hooks/hooks';
import { ToggleBtnState } from '../header/leftHeader/leftHeaderSlice';
import {
  MainClass,
  SecondaryClass,
  DisplayCourseTube,
  DisplayContactMe,
  DisplayCreateContent,
} from './webBodySlice';
import CourseTube from './courseTube/CourseTube';
import ContactMe from './contactMe/ContactMe';
import CreateContent from './createContent/CreateContent';

function WebBody() {
  const toggleBtn = useAppSelector(ToggleBtnState);
  const mainClass = useAppSelector(MainClass);
  const secondaryClass = useAppSelector(SecondaryClass);
  const displayCourseTube = useAppSelector(DisplayCourseTube);
  const displayContactMe = useAppSelector(DisplayContactMe);
  const displayCreateContent = useAppSelector(DisplayCreateContent);

  return (
    <section className={toggleBtn ? secondaryClass : mainClass} data-testid="web-body">
      {displayCourseTube && <CourseTube />}
      {displayContactMe && <ContactMe />}
      {displayCreateContent && <CreateContent />}
    </section>
  );
}

export default WebBody;
