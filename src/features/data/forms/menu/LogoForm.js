import Input from '../dependencies/Input';
import ConfirmMsg from '../dependencies/ConfirmMsg';
import ErrMsg from '../dependencies/ErrMsg';
import CreateBtn from '../dependencies/CreateBtn';
import UpdateBtn from '../dependencies/UpdateBtn';
import DeleteBtn from '../dependencies/DeleteBtn';
import PropTypes from 'prop-types';

const LogoForm = ({
  logo,
  setLogo,
  confirmMsg,
  errMsg,
  handleCreate,
  handleUpdate,
  handleDelete,
}) => {
  const { courseName, courseImg } = logo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="logo-form">
      {handleCreate && <h1>Menu</h1>}

      <form>
        <ConfirmMsg msg={confirmMsg} />
        <ErrMsg msg={errMsg} />

        <Input
          name="courseName"
          placeholder="Course Name"
          handleChange={handleChange}
          value={courseName}
        />
        <Input
          name="courseImg"
          placeholder="Course Image"
          handleChange={handleChange}
          value={courseImg}
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

LogoForm.propTypes = {
  logo: PropTypes.object.isRequired,
  setLogo: PropTypes.func.isRequired,
  confirmMsg: PropTypes.string,
  errMsg: PropTypes.string,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default LogoForm;
