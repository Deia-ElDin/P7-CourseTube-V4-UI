import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import {
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} from '../../../slices/course/courseApiSlice';
import { editCourse, delCourse } from '../../../slices/dataSlice';
import CourseForm from '../../../forms/course/CourseForm';
import PropTypes from 'prop-types';

const UpdateAndDeleteCourse = ({ id, setShowEditForm }) => {
  const initialState = {
    id: id,
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
  const [errMsg, setErrMsg] = useState('');
  const [updateCourse] = useUpdateCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [course, dispatch]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedCourse = await updateCourse({ ...course }).unwrap();
      setConfirmMsg(updatedCourse.msg);
      dispatch(editCourse(updatedCourse.course));
      setCourse(initialState);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create course');
    }
  };

  const handleDelete = async () => {
    try {
      const deletedCourseMsg = await deleteCourse(id).unwrap();
      dispatch(delCourse(id));
      setConfirmMsg(deletedCourseMsg.msg);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create instructor');
    }
  };

  return (
    <CourseForm
      course={course}
      setCourse={setCourse}
      confirmMsg={confirmMsg}
      errMsg={errMsg}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
};

UpdateAndDeleteCourse.propTypes = {
  id: PropTypes.string.isRequired,
  setShowEditForm: PropTypes.func.isRequired,
};

export default UpdateAndDeleteCourse;
