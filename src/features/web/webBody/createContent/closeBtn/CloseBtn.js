import { useAppDispatch } from '../../../../../hooks/hooks';
import { handleCloseBtnClick } from '../../webBodySlice';
import CloseButton from '../../../dependencies/CloseButton';

const CloseBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <CloseButton
        handleBtnClick={() => dispatch(handleCloseBtnClick())}
        testId="create-content-close-btn"
      />
    </>
  );
};

export default CloseBtn;
