import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleSidebarCourseClick } from '../../../webBody/webBodySlice';
import { cap } from '../../../dependencies/functions/fn';
import EditButton from '../../../dependencies/EditButton';
import PropTypes from 'prop-types';

function Course({ id, courseName, courseLogo, courseAlt }) {
  const dispatch = useAppDispatch();

  return (
    <section className="course-section">
      <article
        className="course"
        id={id}
        onClick={() => dispatch(handleSidebarCourseClick(courseName))}
      >
        <figure className="logo">
          <img className="sidebar-img" src={courseLogo} alt={courseAlt} />
        </figure>
        <h4 className="name">{cap(courseName)}</h4>
      </article>

      <EditButton target="logo" id={id} />
    </section>
  );
}

Course.propTypes = {
  id: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  courseLogo: PropTypes.string.isRequired,
  courseAlt: PropTypes.string.isRequired,
};

export default Course;
