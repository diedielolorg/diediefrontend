import { styled } from 'styled-components'
import { Image } from '../../components/common'
import { loading } from '../../assets'

const Loading = () => {
  return (
    <LoadingWrap>
      <Image width={550} src={loading} />
    </LoadingWrap>
  )
}

export default Loading

const LoadingWrap = styled.div`
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
`
