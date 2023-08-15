import { styled } from 'styled-components'

export const BackgroundMain = styled.main`
  display: flex;
  justify-content: center;
`

export const OverRaySection = styled.section`
  width: 702px;
  padding-top: 74px;
  padding-left: 98px;
  padding-right: 98px;
  padding-bottom: 63px;
  margin-top: 23px;

  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};
`

export const UserInfoBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 37px;
`

export const UserLabel = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;

  margin-bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  P {
    color: ${({ theme }) => theme.gray.AE};
    font-size: 15px;
    font-weight: 400;
    line-height: 16px;

    padding-left: 10px;
  }
`

export const UserInfoInput = styled.input`
  width: ${(props) => `${props.size}px`};
  height: 43px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.gray.DE};
  padding-left: 14px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray.AE};
    font-weight: 400;
    line-height: 16px;
    font-size: 15px;
  }
`

export const HelpMessageDiv = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  height: 16px;

  margin-top: 8px;
  margin-bottom: 15px;
`
