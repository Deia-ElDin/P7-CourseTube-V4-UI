import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useCreateInstructorMutation } from '../../../slices/instructor/instructorApiSlice';
import { addInstructor } from '../../../slices/dataSlice';
import InstructorForm from '../../../forms/instructor/InstructorForm';

const CreateInstructor = () => {
  const initialState = { channelName: '', channelLink: '', channelLogo: '', verified: false };
  const [instructor, setInstructor] = useState(initialState);
  const [errMsg, setErrMsg] = useState();
  const [confirmMsg, setConfirmMsg] = useState('');
  const [createInstructor] = useCreateInstructorMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [instructor, dispatch]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const createdInstructor = await createInstructor(instructor).unwrap();
      setConfirmMsg(createdInstructor.msg);
      dispatch(addInstructor(createdInstructor.instructor));
      setInstructor(initialState);
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
      handleCreate={handleCreate}
    />
  );
};

export default CreateInstructor;
