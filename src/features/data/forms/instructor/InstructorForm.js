import Input from '../dependencies/Input';
import ConfirmMsg from '../dependencies/ConfirmMsg';
import ErrMsg from '../dependencies/ErrMsg';
import CreateBtn from '../dependencies/CreateBtn';
import UpdateBtn from '../dependencies/UpdateBtn';
import DeleteBtn from '../dependencies/DeleteBtn';
import PropTypes from 'prop-types';

const InstructorForm = ({
  instructor,
  setInstructor,
  confirmMsg,
  errMsg,
  handleCreate,
  handleUpdate,
  handleDelete,
}) => {
  const { channelName, channelLink, channelLogo, verified } = instructor;

  const handleChange = (e) => {
    setInstructor((prev) => {
      const { name, value, type, checked } = e.target;
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  return (
    <section className="instructor-form">
      {handleCreate && <h1>Instructor</h1>}

      <form>
        <ConfirmMsg msg={confirmMsg} />
        <ErrMsg msg={errMsg} />

        <fieldset>
          <Input
            name="channelName"
            placeholder="Channel Name"
            handleChange={handleChange}
            value={channelName}
          />
          <Input type="checkbox" name="verified" handleChange={handleChange} value={verified} />
        </fieldset>

        <Input
          name="channelLink"
          placeholder="Channel Link"
          handleChange={handleChange}
          value={channelLink}
        />
        <Input
          name="channelLogo"
          placeholder="Channel Logo"
          handleChange={handleChange}
          value={channelLogo}
        />

        <CreateBtn handleCreate={handleCreate} />
        <fieldset>
          <UpdateBtn handleUpdate={handleUpdate} />
          <DeleteBtn handleDelete={handleDelete} />
        </fieldset>
      </form>
    </section>
  );
};

InstructorForm.propTypes = {
  instructor: PropTypes.object.isRequired,
  setInstructor: PropTypes.func.isRequired,
  confirmMsg: PropTypes.string,
  errMsg: PropTypes.string,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default InstructorForm;
