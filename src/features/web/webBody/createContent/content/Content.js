import CreateLogo from '../../../../data/crud/create/menu/CreateLogo';
import CreateInstructor from '../../../../data/crud/create/instructor/CreateInstructor';
import CreateCourse from '../../../../data/crud/create/course/CreateCourse';

const Content = () => {
  return (
    <section className="content">
      <section className="sidebar-content">
        <CreateLogo />
        <CreateInstructor />
      </section>
      <section className="web-body-content">
        <CreateCourse />
      </section>
    </section>
  );
};

export default Content;
