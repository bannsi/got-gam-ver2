import React from 'react';
import AddFolderItem from './AddFolderItem';
import ModalContent from '../../../common/components/modal/ModalContent';
import NextButton from '../../../common/components/buttons/NextButton';
import styled from 'styled-components';
import { ModalContentProps } from '../../../common/interfaces/ModalContentProps';

const FolderModalContent = ({ onNext }: ModalContentProps) => {
  // const folders = useSelector();
  // const onArchive = () => {};
  return (
    <ModalContent type="1">
      <span className="title">폴더 선택</span>
      <FolderSelectorContainer>
        <AddFolderItem onClick={() => onNext()} />
        {/* <FolderSelectItem
          title={'부산'}
          thumbnail={
            'https://w.namu.la/s/31715e75ed8c895ea2d951c69f10b898bdc8bcf23495d7721cc38299a6c3200ed6b13691268191472e1900010f86499f54882be5b16f6e7e45a7c3dce94be17799e78b5a51e1903963021df44d55b3dfba34c177cdb1675399a5e82b38b1da64977a8412ea2ffd532a559cbd48e216dd'
          }
          selected={folder === '부산'}
          onClick={() => setFolder('부산')}
        /> */}
      </FolderSelectorContainer>
      <NextButton text={'완료'} onNext={() => console.log('선택된 폴더에 저장하기')} />
    </ModalContent>
  );
};

export default FolderModalContent;

const FolderSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 22px;
`;
