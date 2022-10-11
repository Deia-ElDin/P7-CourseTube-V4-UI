import { useAppSelector, useAppDispatch } from '../../../../../hooks/hooks';
import { CreateBtnState } from '../rightHeaderSlice';
import { handleCreateContentBtnClick } from '../../../webBody/webBodySlice';
import { BiMessageSquareAdd } from 'react-icons/bi';
import Button from '../../dependencies/Button';

const CreateBtn = () => {
  const createBtn = useAppSelector(CreateBtnState);
  const dispatch = useAppDispatch();

  return (
    createBtn && (
      <Button
        title="Create Content"
        ariaLabel="Create Content"
        handleBtnClick={() => dispatch(handleCreateContentBtnClick())}
        icon={<BiMessageSquareAdd className="icon" data-testid="create-btn-icon" />}
      />
    )
  );
};

export default CreateBtn;
