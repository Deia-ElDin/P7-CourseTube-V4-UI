import { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../../../hooks/hooks';
import { useUpdateLogoMutation, useDeleteLogoMutation } from '../../../slices/menu/menuApiSlice';
import { editLogo, delLogo } from '../../../slices/dataSlice';
import LogoForm from '../../../forms/menu/LogoForm';
import PropTypes from 'prop-types';

const UpdateAndDeleteLogo = ({ id, setShowEditForm }) => {
  const initialState = { id: id, courseName: '', courseImg: '' };
  const [logo, setLogo] = useState(initialState);
  const [confirmMsg, setConfirmMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [updateLogo] = useUpdateLogoMutation();
  const [deleteLogo] = useDeleteLogoMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setConfirmMsg('');
    setErrMsg('');
  }, [logo, dispatch]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedLogo = await updateLogo({ ...logo }).unwrap();
      setConfirmMsg(updatedLogo.msg);
      dispatch(editLogo(updatedLogo.course));
      setLogo(initialState);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create logo');
    }
  };

  const handleDelete = async () => {
    try {
      const deletedLogoMsg = await deleteLogo(id).unwrap();
      dispatch(delLogo(id));
      setConfirmMsg(deletedLogoMsg.msg);
      setShowEditForm(false);
    } catch (err) {
      setConfirmMsg('');
      if (!err) setErrMsg('No Server Response');
      else if (err?.status) setErrMsg(err.data);
      else setErrMsg('Failed to create Logo');
    }
  };

  return (
    <LogoForm
      logo={logo}
      setLogo={setLogo}
      confirmMsg={confirmMsg}
      errMsg={errMsg}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
};

UpdateAndDeleteLogo.propTypes = {
  id: PropTypes.string.isRequired,
  setShowEditForm: PropTypes.func.isRequired,
};

export default UpdateAndDeleteLogo;
