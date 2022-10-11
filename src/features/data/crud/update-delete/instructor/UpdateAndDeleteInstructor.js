import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import {
  useUpdateInstructorMutation,
  useDeleteInstructorMutation,
} from '../../../slices/instructor/instructorApiSlice';
import { editInstructor, delInstructor } from '../../../slices/dataSlice';
import InstructorForm from '../../../forms/instructor/InstructorForm';
import PropTypes from 'prop-types';

const UpdateAndDeleteInstructor = ({ id, setShowEditForm }) => {
  const initialState = {
    id: id,
    channelName: '',
    channelLink: '',
    channelLogo: '',
    verified: false,
  };
  const [instructor, setInstructor] = useState(initialState);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [updateInstructor] = useUpdateInstructorMutation();
  const [deleteInstructor] = useDeleteInstructorMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [instructor, dispatch]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedInstructor = await updateInstructor({ ...instructor }).unwrap();
      setConfirmMsg(updatedInstructor.msg);
      dispatch(editInstructor(updatedInstructor.instructor));
      setInstructor(initialState);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create instructor');
    }
  };

  const handleDelete = async () => {
    try {
      const deletedInstructorMsg = await deleteInstructor(id).unwrap();
      dispatch(delInstructor(id));
      setConfirmMsg(deletedInstructorMsg.msg);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create instructor');
    }
  };

  return (
    <InstructorForm
      instructor={instructor}
      setInstructor={setInstructor}
      confirmMsg={confirmMsg}
      errMsg={errMsg}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
};

UpdateAndDeleteInstructor.propTypes = {
  id: PropTypes.string.isRequired,
  setShowEditForm: PropTypes.func.isRequired,
};

export default UpdateAndDeleteInstructor;
