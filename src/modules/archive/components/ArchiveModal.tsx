import Link from 'next/link';
import CreateModalContent from './CreateModalContent';
import FolderModalContent from './FolderModalContent';
import LinkModalContent from './LinkModalContent';

// type ModalElementType = {
//   [index: string]: JSX.Element;
//   link: JSX.Element;
//   folder: JSX.Element;
//   newFolder: JSX.Element;
// };

// const models = {
//   ['link']: <LinkModalContent />,
//   ['folder']: <FolderModalContent />,
//   ['newFolder']: <CreateModalContent />
// };

interface ArchiveModalProps {
  content: string;
  onNext: () => void;
}

const ArchiveModal = ({ content, onNext }: ArchiveModalProps) => {
  return content === 'link' ? (
    <LinkModalContent onNext={onNext} />
  ) : content === 'folder' ? (
    <FolderModalContent onNext={onNext} />
  ) : content === 'newFolder' ? (
    <CreateModalContent onNext={onNext} />
  ) : (
    <></>
  );
};

export default ArchiveModal;
