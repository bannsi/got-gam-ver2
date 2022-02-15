import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import { FileType, nextPage, setImg, selectImgs } from '../utils/makePiece.slice';

const ImageUpload = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const initFiles = useSelector(selectImgs);
  const [isDrag, setIsDrag] = useState(false); // 드래그 중인지
  const [files, setFiles] = useState<FileType[]>([...initFiles]);
  const fileId = useRef<number>(0);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any) => {
      let selectFiles: File[] = [];
      let tmpFiles: FileType[] = files;

      if (e.type === 'drop') {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }
      console.log(selectFiles);
      for (const file of selectFiles) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          const previewImgUrl = reader.result;
          console.log(file, previewImgUrl);
          if (previewImgUrl) {
            tmpFiles = [...tmpFiles, { id: fileId.current++, object: file, url: previewImgUrl }];
            setFiles([...tmpFiles]);
          }
        };
      }

      console.log(files, tmpFiles);
    },
    [files]
  );

  const handleDragIn = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDragOut = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDrag(false);
  }, []);
  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer!.files) {
      setIsDrag(true);
    }
  }, []);
  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onChangeFiles(e);
      setIsDrag(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);
  const removeDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();
    return () => removeDragEvents();
  }, [initDragEvents, removeDragEvents]);

  return (
    <Container>
      <Content isDrag={isDrag} ref={dragRef}>
        <span>여기에 사진을 끌어다 놓으세요.</span>
        <label htmlFor="imgs">사진 직접 올리기</label>
        <input id="imgs" type="file" accept="image/png" multiple onChange={onChangeFiles}></input>
      </Content>
      <Images>
        {files.length > 0 &&
          files.map((file) => {
            const {
              id,
              object: { name },
              url
            } = file;
            console.log(file);
            return <PreviewImg key={id} url={url as string}></PreviewImg>;
          })}
      </Images>
      <NextButton
        disable={false}
        onNext={() => {
          dispatch(nextPage());
          dispatch(setImg(files));
        }}
      />
    </Container>
  );
};

export default ImageUpload;

interface Props {
  isDrag: boolean;
}
const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 16px 24px;
`;

const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${(props) => props.isDrag && props.theme.grayScale.disable};
  transition: all 0.5s;
  input {
    display: none;
  }
  label {
    background-color: ${(props) => props.theme.brandColor};
    border-radius: 8px;
    padding: 8px 20px;
    color: white;
    text-align: center;
  }
`;

const Images = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
`;

interface ImgProps {
  url: string;
}

const PreviewImg = styled.div<ImgProps>`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: ${(props) => `1px solid ${props.theme.grayScale.border}`};
  margin: 10px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: cover;
`;
