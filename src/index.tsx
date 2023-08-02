import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './style/GlobalStyle'

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
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </QueryClientProvider>,
)

reportWebVitals()
