import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useCreateLogoMutation } from '../../../slices/menu/menuApiSlice';
import { addLogo } from '../../../slices/dataSlice';
import LogoForm from '../../../forms/menu/LogoForm';

const CreateLogo = () => {
  const initialState = { courseName: '', courseImg: '' };
  const [logo, setLogo] = useState(initialState);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [createLogo] = useCreateLogoMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [logo, dispatch]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const createdLogo = await createLogo(logo).unwrap();
      setConfirmMsg(createdLogo.msg);
      dispatch(addLogo(createdLogo.course));
      setLogo(initialState);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create logo');
    }
  };

  return (
    <LogoForm
      logo={logo}
      setLogo={setLogo}
      confirmMsg={confirmMsg}
      errMsg={errMsg}
      handleCreate={handleCreate}
    />
  );
};

export default CreateLogo;
