import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../../hooks/hooks';
import {
  DisplayAllCourses,
  SeekingCourse,
  RequiredCourse,
  RequiredInstructor,
  UserSearchValue,
  SeekingInstructor,
} from '../webBodySlice';
import { SliderValue } from '../../header/rightHeader/rightHeaderSlice';
import { InstructorsData, CoursesData } from '../../../data/slices/dataSlice';
import { handleDate } from '../../dependencies/functions/fn';
import Course from './course/Course';

function CourseTube() {
  const [courseTube, setCourseTube] = useState([]);
  const instructorsData = useAppSelector(InstructorsData);
  const coursesData = useAppSelector(CoursesData);
  const sliderValue = useAppSelector(SliderValue);
  const displayAllCourses = useAppSelector(DisplayAllCourses);
  const seekingCourse = useAppSelector(SeekingCourse);
  const requiredCourse = useAppSelector(RequiredCourse);
  const seekingInstructor = useAppSelector(SeekingInstructor);
  const requiredInstructor = useAppSelector(RequiredInstructor);
  const userSearchValue = useAppSelector(UserSearchValue);
  const useEffectDependencyArray = [
    instructorsData,
    coursesData,
    userSearchValue,
    displayAllCourses,
    requiredCourse,
    requiredInstructor,
  ];
  const courseTubeStyles = {
    gridTemplateColumns: `repeat(${sliderValue > 0 ? sliderValue : '1'}, 1fr)`,
  };

  useEffect(() => {
    function courseTubeFun() {
      let data;

      if (displayAllCourses) {
        data = coursesData;
      } else if (seekingCourse) {
        data = coursesData.filter((course) =>
          course.searchKeywords.toLowerCase().includes(requiredCourse)
        );
      } else if (seekingInstructor) {
        data = coursesData.filter((course) =>
          course.channelName.toLowerCase().includes(requiredInstructor)
        );
      } else {
        data = coursesData.filter(
          (course) =>
            course.channelName.toLowerCase().includes(userSearchValue) ||
            course.searchKeywords.toLowerCase().includes(userSearchValue)
        );
      }

      const webBody = data.map((course) => {
        const {
          _id,
          channelName,
          searchKeywords,
          courseLink,
          courseImg,
          courseTitle,
          courseDuration,
          views,
          createdAt,
        } = course;

        const foundInstructor = instructorsData.find(
          (instructor) => instructor.channelName === channelName
        );

        const channelLink = foundInstructor ? foundInstructor.channelLink : '';
        const channelLogo = foundInstructor ? foundInstructor.channelLogo : '';
        const verified = foundInstructor ? foundInstructor.verified : false;

        return (
          <Course
            key={_id}
            id={_id}
            videoLink={courseLink}
            videoImg={courseImg}
            videoAlt={searchKeywords}
            videoTitle={courseTitle}
            videoDuration={courseDuration}
            channelName={channelName}
            channelLink={channelLink}
            channelImg={channelLogo}
            channelAlt={channelName}
            verified={verified}
            videoDetails={
              createdAt ? `${views} • ${handleDate(createdAt)}` : views
            }
          />
        );
      });

      setCourseTube(webBody);
    }

    courseTubeFun();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useEffectDependencyArray);

  return (
    <section
      className="course-tube"
      style={courseTubeStyles}
      data-testid="coursetube-page"
    >
      {courseTube}
    </section>
  );
}

export default CourseTube;
