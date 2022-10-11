import { useState } from 'react';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import UpdateAndDeleteLogo from '../../data/crud/update-delete/menu/UpdateAndDeleteLogo';
import UpdateAndDeleteInstructor from '../../data/crud/update-delete/instructor/UpdateAndDeleteInstructor';
import UpdateAndDeleteCourse from '../../data/crud/update-delete/course/UpdateAndDeleteCourse';
import PropTypes from 'prop-types';

const EditButton = ({ target, id }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleClick = () => setShowEditForm(!showEditForm);

  return (
    <section className="edit-btn-section">
      <button className="edit-btn">
        {target === 'course' ? (
          <BsThreeDotsVertical onClick={handleClick} />
        ) : (
          <BsThreeDots onClick={handleClick} />
        )}
      </button>

      {showEditForm && target === 'logo' && (
        <UpdateAndDeleteLogo id={id} setShowEditForm={setShowEditForm} />
      )}
      {showEditForm && target === 'instructor' && (
        <UpdateAndDeleteInstructor id={id} setShowEditForm={setShowEditForm} />
      )}
      {showEditForm && target === 'course' && (
        <UpdateAndDeleteCourse id={id} setShowEditForm={setShowEditForm} />
      )}
    </section>
  );
};

EditButton.propTypes = {
  target: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EditButton;
