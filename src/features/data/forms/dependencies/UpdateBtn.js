import PropTypes from 'prop-types';

const UpdateBtn = ({ handleUpdate }) => {
  return (
    handleUpdate && (
      <button type="submit" className="update-btn" onClick={handleUpdate}>
        Update
      </button>
    )
  );
};

UpdateBtn.propTypes = {
  handleUpdate: PropTypes.func,
};

export default UpdateBtn;
