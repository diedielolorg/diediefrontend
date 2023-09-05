import React, { useState } from 'react'
import { styled } from 'styled-components'
import { v4 as uuid } from 'uuid'
import ReactPaginate from 'react-paginate'
import { useRecoilState } from 'recoil'
import { pageState } from '../../recoil/PageAtom'
import Image from './Image'
import Badge from './Badge'
import { arrowUp, arrowDown } from '../../assets'
import { ReportListProps, ToggleMoreBtnState, ReportContentProps } from '../../interfaces/CommonTypes'

const ReportList = ({ reportlist, reportlength }: ReportListProps) => {
  const uniqueId: string = uuid()

  const [toggleMoreBtn, setToggleMoreBtn] = useState<ToggleMoreBtnState>({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  })
  const [currentPage, setCurrentPage] = useRecoilState(pageState)

  // * [더보기 버튼] onClick
  const onMoreClickHandler = (idx: number) =>
    setToggleMoreBtn((prev) => ({
      ...prev,
      [idx]: !toggleMoreBtn[idx],
    }))

  // * [pagination] onChange
  const pageChangeHandler = (event: { selected: number }) => {
    setCurrentPage({ page: event.selected + 1 })
  }

  return (
    <>
      {reportlist &&
        reportlist.map((list, idx) => (
          <ReportInfoDiv key={list.reportId}>
            <BtnWrapDiv>
              <MoreBtn onClick={() => onMoreClickHandler(idx)}>
                {'더보기'}
                <Image width={15} height={8} src={!toggleMoreBtn[idx] ? arrowDown : arrowUp} />
              </MoreBtn>
            </BtnWrapDiv>
            <div>
              <span>
                <strong>{'욕 카테고리'}</strong>
              </span>
              <Badge $category={list.category} />
            </div>
            <div>
              <span>
                <strong>{'욕한 날짜'}</strong>
              </span>
              <span>{list.reportDate}</span>
            </div>
            <div>
              <span>
                <strong>{'신고 내용'}</strong>
              </span>
              <ReportContentP $status={toggleMoreBtn[idx] ? 'true' : 'false'}>{list.reportPayload}</ReportContentP>
              {toggleMoreBtn[idx] && (
                <>
                  <span>
                    <strong>{'스크린샷'}</strong>
                  </span>
                  <ReportImgDiv>
                    {list.reportCapture.map((img) => (
                      <Image key={uniqueId + img} width={400} height={285} $border={5} src={img} $zoom={'on'} />
                    ))}
                  </ReportImgDiv>
                </>
              )}
            </div>
          </ReportInfoDiv>
        ))}
      {/* // TODO 데이터 5개 이상 있을 때 & 백에서 페이지네이션 구현 되면 다시 체크 */}
      <PaginationDiv>
        <StPagination
          pageCount={Math.ceil(reportlength / 5)}
          pageRangeDisplayed={4}
          marginPagesDisplayed={0}
          forcePage={currentPage.page - 1}
          onPageChange={pageChangeHandler}
          breakLabel={''}
          previousLabel={'<'}
          nextLabel={'>'}
          activeClassName={'active'}
        />
      </PaginationDiv>
    </>
  )
}

export default ReportList

const ReportInfoDiv = styled.div`
  padding: 25px;
  margin-bottom: 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.black};
  span {
    color: ${({ theme }) => theme.gray.AE};
  }
  div > span:nth-child(1) {
    margin-right: 12px;
  }
  & > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
`

const ReportContentP = styled.p<ReportContentProps>`
  padding: 15px 20px;
  border-radius: 10px;
  line-height: 28px;
  text-align: justify;
  background: ${({ theme }) => theme.gray.TT};
  color: ${({ theme }) => theme.color.white};
  white-space: ${({ $status }) => ($status === 'false' ? 'nowrap' : '')};
  overflow: ${({ $status }) => ($status === 'false' ? 'hidden' : '')};
  text-overflow: ellipsis;
`

const BtnWrapDiv = styled.div`
  position: absolute;
  right: 35px;
  button {
    background: transparent;
    font-size: 20px;
    font-weight: 600;
  }
`

const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.green.basic};
  img {
    margin-left: 5px;
  }
`

const ReportImgDiv = styled.div`
  display: flex;
  gap: 15px;
`

const PaginationDiv = styled.div`
  margin: 65px auto 0 auto;
`

const StPagination = styled(ReactPaginate)`
  display: flex;
  gap: 10px;
  li {
    margin: 0 15px;
    color: ${({ theme }) => theme.gray.AE};
    font-size: 18px;
  }
  li a {
    cursor: pointer;
  }
  li.active a {
    color: ${({ theme }) => theme.green.basic};
    font-weight: 900;
  }
`
