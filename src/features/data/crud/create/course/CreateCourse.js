import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useCreateCourseMutation } from '../../../slices/course/courseApiSlice';
import { addCourse } from '../../../slices/dataSlice';
import CourseForm from '../../../forms/course/CourseForm';

const CreateCourse = () => {
  const initialState = {
    channelName: '',
    searchKeywords: '',
    courseLink: '',
    courseImg: '',
    courseTitle: '',
    courseDuration: '',
    views: '',
    createdAt: '',
  };
  const [course, setCourse] = useState(initialState);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [errMsg, setErrMsg] = useState();
  const [createCourse] = useCreateCourseMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [course, dispatch]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const createdCourse = await createCourse(course).unwrap();
      setConfirmMsg(createdCourse.msg);
      dispatch(addCourse(createdCourse.course));
      setCourse(initialState);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create the course');
    }
  };

  return (
    <CourseForm
      course={course}
      setCourse={setCourse}
      confirmMsg={confirmMsg}
      errMsg={errMsg}
      handleCreate={handleCreate}
    />
  );
};

export default CreateCourse;
