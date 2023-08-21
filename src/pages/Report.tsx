import { styled } from 'styled-components'
import ScreenShotImg from '../assets/ScreenShot.svg'

const Report = () => {
  // const [selectedCause, setSelectedCause] = useState<string | null>(null)
  return (
    <>
      <Box>{'임시 헤더'}</Box>
      <ReportContainer>
        <ReportTitleWrap>
          <p>{'신고하려는 소환사'}</p>
          <h2>{'방배동 둠피스트'}</h2>
        </ReportTitleWrap>

        <ReportDateWrap>
          <ItemTitle>{'욕한 날짜'}</ItemTitle>
          <input type={'text'} placeholder={'yyyy. mm. dd.의 형식으로 적어주세요.'} />
        </ReportDateWrap>

        <ScreenShotWrap method={'post'} encType={'multipart/form-data'} onSubmit={(e) => e.preventDefault()}>
          <ItemTitle>{'스크린샷'}</ItemTitle>
          <FileContainer>
            <ImgWrap>
              <img src={ScreenShotImg} alt={'추가한 이미지'} />
            </ImgWrap>
            <FileWrap>
              <div>
                <p>{'장 당10MB 이하의 jpg, jpeg, png 파일을 업로드 해주세요. (최대 3장)'}</p>
                <span>{'스크린샷에서 개인정보가 드러나지 않게 주의해주세요.'}</span>
              </div>
              <div>
                <FileButton htmlFor={'file'}>{'파일 선택'}</FileButton>
                <FileInput type={'file'} id={'file'} />
              </div>
            </FileWrap>
          </FileContainer>
        </ScreenShotWrap>

        <CategoryWrap>
          <ItemTitle>
            {'욕 카테고리'} <span>{'중복 체크 3개 가능'}</span>
          </ItemTitle>
        </CategoryWrap>
      </ReportContainer>
    </>
  )
}

const Box = styled.div`
  width: 100%;
  height: 88px;
`

const ReportContainer = styled.div``

const ReportTitleWrap = styled.div`
  width: 1280px;
  height: 135px;
  margin: 0 auto;
  border-radius: 15px;
  background-color: #000000;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;

  p {
    font-size: 20px;
    font-weight: 700;
  }

  h2 {
    font-size: 35px;
    font-weight: 700;
  }
`

const ReportDateWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  input {
    width: 277px;
    height: 40px;
    border-radius: 10px;
    outline: none;
    padding-inline: 18px;

    &::placeholder {
      font-size: 15px;
      font-weight: 400px;
    }
  }
`

const ItemTitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 13px;

  span {
    font-size: 15px;
    font-weight: 400;
    margin-left: 7px;
  }
`

const ScreenShotWrap = styled.form`
  margin-top: 59px;
`

const FileContainer = styled.div`
  display: flex;
  gap: 35px;
`

const ImgWrap = styled.div`
  width: 300px;
  height: 172px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray.TF};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.white};
    letter-spacing: -0.225px;
    margin-bottom: 11px;
  }

  span {
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.green.basic};
  }
`

const FileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`

const FileButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 45px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.green.basic};
  cursor: pointer;
  border-radius: 10px;
`

const CategoryWrap = styled.div`
  margin-top: 40px;
`

export default Report
