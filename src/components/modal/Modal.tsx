import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Image } from '../common'
import { keepOut } from '../../assets'
import { ModalProps } from '../../interfaces/ModalTypes'

// ! [props]
// * type : 모달 타입
// * title : 모달 제목
// * subTitle : 모달 부제목
// * placeholder : 플레이스 홀더 내용 없으면 null 기재
// * primaryBtn : 버튼 상세 { children : 버튼 텍스트, onClick : onClick 이벤트 }
// * secondaryBtn : 버튼 상세 { children : 버튼 텍스트, onClick : onClick 이벤트 }
const Modal = ({ type, title, subTitle, placeholder, maxLen, primaryBtn, secondaryBtn }: ModalProps) => {
  // 입력 글자수
  const [textLen, setTextLen] = useState(0)
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
          <Title type={type}>{title}</Title>
          {subTitle ? <SubTitle>{subTitle}</SubTitle> : null}
        </ModalTitleDiv>
        {type === 'input' ? (
          <ModalInputWrap>
            <ModalInput placeholder={placeholder} onKeyUp={textLenChkHandler} maxLength={maxLen} />
            <InputLenChk>
              <InputCurSpan>{textLen}</InputCurSpan>
              <InputMaxSpan>{`/${maxLen}`}</InputMaxSpan>
            </InputLenChk>
          </ModalInputWrap>
        ) : null}
        <ModalBtnsDiv>
          {secondaryBtn ? (
            <ModalBtn type={'button'} onClick={secondaryBtn.onClick} isPrimary={false}>
              {secondaryBtn.children}
            </ModalBtn>
          ) : null}
          {primaryBtn ? (
            <ModalBtn type={'button'} onClick={primaryBtn.onClick} isPrimary>
              {primaryBtn.children}
            </ModalBtn>
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
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 1;
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
const ModalBtn = styled.button<{ isPrimary: boolean }>`
  width: 177px;
  height: 55px;
  border-radius: 10px;
  color: #000000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  background: ${(props) => (props.isPrimary ? '#D2F400' : '#DEDEDE')};
`
