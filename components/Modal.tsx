import React from 'react';
import styled from 'styled-components';
import { useSampleDispatch } from './SampleContext';

const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #777;
`

const ModalContent = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  position: relative;
  padding: 30px;

  & > button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`

type Props = {
  children: React.ReactNode
}

const Modal = (props: Props) => {
  const { children } = props;
  const dispatch = useSampleDispatch();

  const _onClickClose = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  const _onClickTouchClose = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch({type: 'CLOSE_MODAL'})
  }

  const _onClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <ModalWrap onClick={_onClickTouchClose}>
      <ModalContent onClick={_onClickContent}>
        {children}
        <button onClick={_onClickClose}>X</button>
        {/* <div>
          <button>추가하기</button>
        </div> */}
      </ModalContent>
    </ModalWrap>
  )
}

export default Modal
