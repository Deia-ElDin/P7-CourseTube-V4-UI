import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import { MenuData, InstructorsData } from '../../../data/slices/dataSlice';
import Course from '../courses/course/Course';
import Instructor from '../instructors/instructor/Instructor';
import PropTypes from 'prop-types';

function List({ target }) {
  const [list, setList] = useState([]);
  const menuData = useAppSelector(MenuData);
  const instructorsData = useAppSelector(InstructorsData);

  useEffect(() => {
    const coursesList = () => {
      return menuData.map((course) => {
        const { _id, courseName, courseImg } = course;
        return (
          <Course
            key={_id}
            id={_id}
            courseLogo={courseImg}
            courseAlt={courseName}
            courseName={courseName}
          />
        );
      });
    };

    const instructorsList = () => {
      return instructorsData.map((instructor) => {
        const { _id, channelName, channelLogo } = instructor;
        return (
          <Instructor
            key={_id}
            id={_id}
            instructorLogo={channelLogo}
            instructorAlt={channelName}
            instructorName={channelName}
          />
        );
      });
    };

    target === 'courses' ? setList(coursesList()) : setList(instructorsList());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuData, instructorsData]);

  return <>{list}</>;
}

List.propTypes = {
  target: PropTypes.string.isRequired,
};

export default List;
