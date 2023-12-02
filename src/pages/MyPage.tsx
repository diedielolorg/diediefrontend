import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { nextonIcon } from '../assets'
import { Image } from '../components/common'
import * as CSS from '../style/LoginRelevantSt'

const MyPage = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  const moveToEditMyInfoBtnHandler = () => {
    navigate('/editinfo')
  }
  const moveToMyReportBtnHandler = () => {
    navigate('/myReport')
  }
  const nickname = localStorage.getItem('nickname')

  return (
    <CSS.BackgroundMain>
      <Section>
        <NameBoxDiv>
          {currentLanguage === 'ko-KR' || currentLanguage === 'ko' ? (
            <>
              <TextP color={'name'}>{nickname}</TextP>
              <TextP>{t('님, 안녕하세요!')}</TextP>
            </>
          ) : (
            <>
              <TextP>{t('님, 안녕하세요!')}</TextP>
              <TextP color={'name'}>{nickname}</TextP>
            </>
          )}
        </NameBoxDiv>
        <MoveToBtnDiv onClick={moveToEditMyInfoBtnHandler}>
          <p>{t('내 정보 수정')}</p>
          <Image width={9} height={18} src={nextonIcon} />
        </MoveToBtnDiv>
        <MoveToBtnDiv onClick={moveToMyReportBtnHandler}>
          <p>{t('내가 등록한 신고')}</p>
          <Image width={9} height={18} src={nextonIcon} />
        </MoveToBtnDiv>
      </Section>
    </CSS.BackgroundMain>
  )
}

export default MyPage

const Section = styled.section`
  display: flex;
  flex-direction: column;
`
const NameBoxDiv = styled.div`
  width: 857px;
  height: 93px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.black};

  gap: 8px;
  padding-left: 46px;
  margin-top: 43px;
  margin-bottom: 22px;
  display: flex;
  align-items: center;
`
const TextP = styled.p`
  color: ${({ color, theme }) => (color === 'name' ? theme.green.name : theme.color.white)};
  text-align: center;
  font-size: 35px;
  font-weight: ${({ color }) => (color === 'name' ? 700 : 400)};
  line-height: 35px;
  line-height: 32px;
`
const MoveToBtnDiv = styled.div`
  width: 857px;
  height: 68px;
  border-radius: 10px;
  border: 1px solid #616161;
  background: rgba(68, 68, 68, 0.3);

  color: ${({ theme }) => theme.color.white};

  font-size: 20px;
  font-weight: 500;
  line-height: 32px;

  display: flex;
  align-items: center;
  padding-left: 46px;
  padding-right: 48px;
  margin-bottom: 15px;
  justify-content: space-between;
  cursor: pointer;
`
