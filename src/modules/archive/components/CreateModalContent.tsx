import React, { useCallback, useState } from 'react';
import NextButton from '../../../common/components/buttons/NextButton';
import ModalInput from '../../../common/components/inputs/ModalInput';
import ModalContent from '../../../common/components/modal/ModalContent';
import { ModalContentProps } from '../../../common/interfaces/ModalContentProps';
import takeTimeFunc from '../../../common/utils/takeTimeFunc';

const CreateModalContent = ({ onNext }: ModalContentProps) => {
  const [title, setTitle] = useState('');
  const onCreateFolder = () => {
    // 폴더 생성 액션 디스패치
  };
  return (
    <ModalContent type="1">
      <span className="title">폴더 생성</span>
      <ModalInput
        placeholder="폴더명을 입력하세요 (최대 10글자)"
        autoFocus
        maxLength={10}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
      <NextButton
        text={'완료'}
        onNext={() => {
          onCreateFolder();
          onNext();
          takeTimeFunc(() => setTitle(''));
        }}
      />
    </ModalContent>
  );
};

export default CreateModalContent;
