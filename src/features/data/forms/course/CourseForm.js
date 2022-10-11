import Input from '../dependencies/Input';
import ConfirmMsg from '../dependencies/ConfirmMsg';
import ErrMsg from '../dependencies/ErrMsg';
import CreateBtn from '../dependencies/CreateBtn';
import UpdateBtn from '../dependencies/UpdateBtn';
import DeleteBtn from '../dependencies/DeleteBtn';
import PropTypes from 'prop-types';

const CourseForm = ({
  course,
  setCourse,
  confirmMsg,
  errMsg,
  handleCreate,
  handleUpdate,
  handleDelete,
}) => {
  const {
    channelName,
    searchKeywords,
    courseImg,
    courseLink,
    courseTitle,
    courseDuration,
    views,
    createdAt,
  } = course;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="course-form">
      {handleCreate && <h1>CourseTube</h1>}

      <form>
        <ConfirmMsg msg={confirmMsg} />
        <ErrMsg msg={errMsg} />

        <Input
          name="channelName"
          placeholder="Channel Name"
          handleChange={handleChange}
          value={channelName}
        />
        <Input
          name="searchKeywords"
          placeholder="Search Keywords"
          handleChange={handleChange}
          value={searchKeywords}
        />
        <Input
          name="courseLink"
          placeholder="Course Link"
          handleChange={handleChange}
          value={courseLink}
        />
        <Input
          name="courseImg"
          placeholder="Course Image"
          handleChange={handleChange}
          value={courseImg}
        />
        <Input
          name="courseTitle"
          placeholder="Course Title"
          handleChange={handleChange}
          value={courseTitle}
        />
        <Input
          name="courseDuration"
          placeholder="Course Duration"
          handleChange={handleChange}
          value={courseDuration}
        />
        <Input name="views" placeholder="Views" handleChange={handleChange} value={views} />
        <Input
          name="createdAt"
          placeholder="Created Date"
          handleChange={handleChange}
          value={createdAt}
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

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  setCourse: PropTypes.func.isRequired,
  confirmMsg: PropTypes.string,
  errMsg: PropTypes.string,
  handleCreate: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default CourseForm;
