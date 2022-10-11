import PropTypes from 'prop-types';

const SubmitBtn = ({ handleCreate }) => {
  return (
    handleCreate && (
      <button type="submit" className="form-btn" onClick={handleCreate}>
        Create
      </button>
    )
  );
};

SubmitBtn.propTypes = {
  handleDelete: PropTypes.func,
};

export default SubmitBtn;
