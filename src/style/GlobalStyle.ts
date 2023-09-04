import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'SUIT-Regular';
      font-weight: normal;
      font-style: normal;
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
  }

  * { margin: 0; padding: 0; border: 0; font-family: 'SUIT-Regular'; }
  *, *:before, *:after { box-sizing: border-box; }
  html { 
    overflow-y: auto;
    overflow-x: hidden;
  
    ::-webkit-scrollbar {
      width: 12px;
      height: 125px;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.gray.SF};
      border-radius: 6px;
    }
  
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.gray.TO};
    }
  }
  body { 
    min-width: 320px;
  
  }
  ol, ul, li { list-style: none; }
  a { text-decoration: none; color: inherit; }
  img { border: 0; vertical-align: middle; }
  fieldset { border: none; }
  input, select, button, textarea { vertical-align: middle; }
  button, input[type=button], input[type=image] { cursor: pointer; }
  legend { position: absolute; left: -9999px; }
  table { border-collapse: collapse; }
  caption { text-indent: -9999px; height: 0; overflow: hidden; font-size: 0; } 
  strong, em, address, th { font-weight: normal; font-style: normal; }
  h1, h2, h3, h4, h5, h6 { font-weight: normal; font-size: 100%; }
  button { cursor: pointer; }
  img, video { max-width: 100% }
  textarea { resize: none; }
`

// * Modal Background
export const ModalBackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`

// * NoMatch, Error Page
export const WrapDiv = styled.div`
  padding-top: 155px;
  display: flex;
  section {
    width: 50%;
  }
  p {
    color: ${({ theme }) => theme.color.white};
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
  }
`

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
`

export const IllustSection = styled.section`
  img {
    margin-top: 200px;
  }
`
