import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../../common/components/modal/Modal';
import AddFolderButton from '../components/AddFolderButton';
import ArchiveModal from '../components/ArchiveModal';
import LinkButton from '../components/LinkButton';

const Archive = () => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('newFolder');
  const [createMode, setCreateMode] = useState(true);

  const onClose = useCallback(() => setVisible(false), []);
  const onNext = useCallback(() => {
    if (createMode) {
      onClose();
    } else {
      if (content === 'link') {
        setContent('folder');
      } else if (content === 'folder') {
        setContent('newFolder');
      } else {
        setContent('folder');
      }
    }
  }, [createMode, content]);

  const onCreateFolderMode = useCallback(() => {
    setContent('newFolder');
    setVisible(true);
    setCreateMode(true);
  }, []);

  const onArchiveLinkMode = useCallback(() => {
    setContent('link');
    setVisible(true);
    setCreateMode(false);
  }, []);

  return (
    <Container>
      <AddFolderButton onClick={onCreateFolderMode} />
      <Modal onClose={onClose} visible={visible}>
        <ArchiveModal content={content} onNext={onNext} />
      </Modal>
      <LinkButton onClick={onArchiveLinkMode} />
    </Container>
  );
};

export default Archive;

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 57px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 16px;
  padding: 16px;
`;
