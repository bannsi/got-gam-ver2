import React, { useState } from 'react';
import styled from 'styled-components';
import { Caption } from '../../../../styles/text/Caption';
import AddTimelineButton from '../../../common/components/buttons/AddTimelineButton';
import NextButton from '../../../common/components/buttons/NextButton';
import ModalInput from '../../../common/components/inputs/ModalInput';
import TimeLineInput from '../../../common/components/inputs/TimelineInput';
import ModalContent from '../../../common/components/modal/ModalContent';
import { ModalContentProps } from '../../../common/interfaces/ModalContentProps';

const LinkModalContent = ({ onNext }: ModalContentProps) => {
  const [link, setLink] = useState('');
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [timelines, setTimelines] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  return (
    <ModalContent type="1">
      <span className="title">링크저장</span>
      <span className="caption">링크</span>
      <ModalInput
        autoFocus
        value={link}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setLink(e.target.value);
          if (e.target.value.indexOf('youtube.com') !== -1) {
            setTimelineVisible(true);
          }
        }}
      />
      <InputListContainer visible={timelineVisible}>
        <span>타임라인 (선택)</span>
        {Object.keys(timelines).map((timeline, index) => {
          return (
            <TimeInputContainer key={index}>
              <TimeLineInput
                setTimeline={(time: string) =>
                  setTimelines([...timelines.slice(0, index), time, ...timelines.slice(index + 1)])
                }
              ></TimeLineInput>
              {index === 0 && <AddTimelineButton onClick={() => setCount(count + 1)} />}
            </TimeInputContainer>
          );
        })}
      </InputListContainer>
      <NextButton text={'다음'} onNext={() => onNext()} />
    </ModalContent>
  );
};

export default LinkModalContent;

interface TimelineInputProps {
  visible: boolean;
}

const InputListContainer = styled.div<TimelineInputProps>`
  display: none;
  flex-direction: column;
  max-height: 0px;
  ${Caption}
  ${(props) =>
    props.visible ? 'display: flex; max-height: 400px;' : 'max-height: 0; display: none;'}
`;

const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
