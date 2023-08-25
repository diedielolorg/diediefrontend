import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { GlobalStyle, theme } from './style'
import App from './App'
import './utils/Locales/i18n'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 화면 탭 변경시 재 조회 설정을 기본 true에서 false로 바꾸는 옵션
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>,
)

reportWebVitals()
