import PropTypes from 'prop-types';

const DeleteBtn = ({ handleDelete }) => {
  return (
    handleDelete && (
      <button type="button" className="delete-btn" onDoubleClick={handleDelete}>
        Delete
      </button>
    )
  );
};

DeleteBtn.propTypes = {
  handleDelete: PropTypes.func,
};

export default DeleteBtn;
