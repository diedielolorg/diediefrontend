import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { styled } from 'styled-components'
import { keepOut } from '../../assets'
import { ModalProps } from '../../interfaces/ModalTypes'
import ModalAtom from '../../recoil/ModalAtom'
import { Button, Image } from '../common'

// ! [props]
// * type : 모달 타입
// * title : 모달 제목
// * subTitle : 모달 부제목
// * placeholder : 플레이스 홀더 내용 없으면 null 기재
// * primaryBtn : 버튼 상세 { children : 버튼 텍스트, onClick : onClick 이벤트 }
// * secondaryBtn : 버튼 상세 { children : 버튼 텍스트, onClick : onClick 이벤트 }
const Modal = ({ type }: ModalProps) => {
  const [modal, setModal] = useRecoilState(ModalAtom)
  // 입력 글자수
  const [textLen, setTextLen] = useState(0)
  const [isOpenBtn, setIsOpenBtn] = useState(false)
  useEffect(() => {
    if (textLen >= 5) {
      setIsOpenBtn(true)
    }
  }, [textLen])
  // 입력값 이벤트
  const textLenChkHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    setTextLen(e.currentTarget.textLength)
  }
  return (
    <ModalOutlet>
      <ModalLayout>
        {type === 'confirm' ? (
          <ModalIconDiv>
            <Image width={100} height={100} src={keepOut} alt={'모달아이콘'} />
          </ModalIconDiv>
        ) : null}
        <ModalTitleDiv type={type}>
          <Title type={type}>{modal.title}</Title>
          {modal.subTitle ? <SubTitle>{modal.subTitle}</SubTitle> : null}
        </ModalTitleDiv>
        {type === 'input' ? (
          <ModalInputWrap>
            <ModalInput placeholder={modal.placeholder} onKeyUp={textLenChkHandler} maxLength={modal.maxLen} />
            <InputLenChk>
              <InputCurSpan>{textLen}</InputCurSpan>
              <InputMaxSpan>{`/${modal.maxLen}`}</InputMaxSpan>
            </InputLenChk>
          </ModalInputWrap>
        ) : null}
        <ModalBtnsDiv>
          {modal.secondaryBtn ? (
            <Button size={'l'} onclick={modal.secondaryBtn.onClick} color={'gray'}>
              {modal.secondaryBtn.children}
            </Button>
          ) : null}
          {modal.primaryBtn ? (
            <Button
              size={'l'}
              color={type === 'confirm' || isOpenBtn ? 'lime' : 'light'}
              onclick={modal.primaryBtn.onClick}
              disabled={type !== 'confirm' && !isOpenBtn}
            >
              {modal.primaryBtn.children}
            </Button>
          ) : null}
        </ModalBtnsDiv>
      </ModalLayout>
    </ModalOutlet>
  )
}

export default Modal

const ModalOutlet = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.5);
`
const ModalLayout = styled.div`
  width: 506px;
  height: 501px;
  border-radius: 20px;
  background: #ffffff;
  padding-left: 69px;
  padding-right: 69px;
`
const ModalTitleDiv = styled.div<{ type: string | undefined }>`
  text-align: ${(props) => (props.type === 'confirm' ? 'center' : 'left')};
`
const Title = styled.h1<{ type: string | undefined }>`
  font-size: 30px;
  font-style: normal;
  font-weight: 800;
  margin-top: ${(props) => (props.type === 'confirm' ? '40px' : '79px')};
  margin-bottom: ${(props) => (props.type === 'confirm' ? '14.59px' : '33px')};
`
const SubTitle = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #444444;
  margin-bottom: 56.41px;
`
const ModalInputWrap = styled.div`
  width: 369px;
  height: 175px;
  border-radius: 10px;
  border: 1.5px solid #bfbfbf;
  background: #ffffff;
  margin-bottom: 47px;
  position: relative;
`
const ModalInput = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  outline: none;
  /* padding: 18px 19px 47px 19px; */
  ::placeholder {
    color: #7d7d7d;
    font-size: 15px;
    font-weight: 400;
  }
  overflow: hidden;
  border-top: 18px solid transparent;
  border-bottom: 47px solid transparent;
  border-right: 19px solid transparent;
  border-left: 19px solid transparent;
`
const InputLenChk = styled.div`
  position: absolute;
  bottom: 16px;
  right: 17px;
`
const InputCurSpan = styled.span`
  color: #000000;
  font-size: 15px;
  font-weight: 700;
`
const InputMaxSpan = styled.span`
  color: #7d7d7d;
  font-size: 15px;
  font-weight: 400;
`
const ModalIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 93.59px;
`
const ModalBtnsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-direction: row;
`
