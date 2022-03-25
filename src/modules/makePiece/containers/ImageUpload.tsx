import { useRouter } from 'next/router';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NextButton from '../../../common/components/buttons/NextButton';
import {
  FileType,
  nextPage,
  setImg,
  selectImgs,
  setImgLocation,
  setDate
} from '../utils/makePiece.slice';
import EXIF from 'exif-js';
import { Location } from '../utils/makePiece.type';
import { ConvertDMSToDD } from '../utils/ConvertDMSToDD';
import DeleteIcon from '../../../common/components/icons/DeleteIcon';

const ImageUpload = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const initFiles = useSelector(selectImgs);
  const [isDrag, setIsDrag] = useState(false); // 드래그 중인지
  const [files, setFiles] = useState<FileType[]>([...initFiles]);
  const fileId = useRef<number>(0);
  const dragRef = useRef<HTMLDivElement | null>(null);

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement> | any) => {
    let selectFiles: File[] = [];
    let tmpFiles: FileType[] = files;
    if (e.type === 'drop') {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }
    const [file] = e.target.files;
    EXIF.getData(file, function () {
      const gpsLat = EXIF.getTag(file, 'GPSLatitude');
      const gpsLng = EXIF.getTag(file, 'GPSLongitude');
      const latDirection = EXIF.getTag(file, 'GPSLatitudeRef');
      const lngDirection = EXIF.getTag(file, 'GPSLongitudeRef');
      const date = EXIF.getTag(file, 'DateTime');
      if (gpsLat && gpsLng && latDirection && lngDirection) {
        const latDec = ConvertDMSToDD(gpsLat[0], gpsLat[1], gpsLat[2], latDirection);
        const lngDec = ConvertDMSToDD(gpsLng[0], gpsLng[1], gpsLng[2], lngDirection);
        const loc: Location = { lat: latDec, lng: lngDec };
        dispatch(setImgLocation(loc));
      }
      if (date) {
        const formatDate = date.split(' ')[0].replace(/:/g, '/') + ' ' + date.split(' ')[1];
        dispatch(setDate(new Date(formatDate)));
      }
    });
    for (const file of selectFiles) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        if (previewImgUrl) {
          tmpFiles = [...tmpFiles, { id: fileId.current++, object: file, url: previewImgUrl }];
          setFiles([...tmpFiles]);
        }
      };
    }
  };

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

  const onDelete = useCallback(
    (id: number) => {
      const newFiles = files.filter((file) => file.id !== id);
      setFiles(newFiles);
    },
    [files]
  );

  useEffect(() => {
    initDragEvents();
    return () => removeDragEvents();
  }, [initDragEvents, removeDragEvents]);

  return (
    <Container>
      <Content isDrag={isDrag} ref={dragRef}>
        <span>여기에 사진을 끌어다 놓으세요.</span>
        <label htmlFor="imgs">사진 직접 올리기</label>
        <input id="imgs" type="file" accept="image/*" multiple onChange={onChangeFiles}></input>
      </Content>
      <Images>
        {files.length > 0 &&
          files.map((file) => {
            const {
              id,
              object: { name },
              url
            } = file;
            return (
              <PreviewImg key={id} url={url as string}>
                <DeleteIcon onDelete={() => onDelete(id)} />
              </PreviewImg>
            );
          })}
      </Images>
      <NextButton
        disable={files.length === 0}
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
  width: 100%;
  overflow-x: scroll;
  padding: 20px;
`;

interface ImgProps {
  url: string;
}

const PreviewImg = styled.div<ImgProps>`
  position: relative;
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
