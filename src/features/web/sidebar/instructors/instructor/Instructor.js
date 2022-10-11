import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleSidebarInstructorClick } from '../../../webBody/webBodySlice';
import EditButton from '../../../dependencies/EditButton';
import PropTypes from 'prop-types';

function Instructor({ id, instructorName, instructorLogo, instructorAlt }) {
  const dispatch = useAppDispatch();

  return (
    <section className="instructor-section">
      <article
        className="instructor"
        id={id}
        onClick={() => dispatch(handleSidebarInstructorClick(instructorName))}
      >
        <figure className="logo">
          <img className="sidebar-img" src={instructorLogo} alt={instructorAlt} />
        </figure>
        <h4 className="name">{instructorName}</h4>
      </article>

      <EditButton target="instructor" id={id} />
    </section>
  );
}

Instructor.propTypes = {
  id: PropTypes.string.isRequired,
  instructorName: PropTypes.string.isRequired,
  instructorLogo: PropTypes.string.isRequired,
  instructorAlt: PropTypes.string.isRequired,
};

export default Instructor;
