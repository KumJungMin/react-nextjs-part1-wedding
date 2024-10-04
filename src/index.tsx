import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { ModalContext } from './contexts/ModalContext'
import reportWebVitals from './reportWebVitals'
import { QueryClientProvider, QueryClient } from 'react-query'

import FullScreenMessage from '@shared/FullScreenMessage'

import './scss/global.scss'
import ErrorBoundary from './components/shared/ErrorBoundary'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        {/* ErrorBoundary
        에러가 발생했을 때, 에러 메시지를 보여줄 수 있습니다.
        */}
        <ErrorBoundary fallbackUI={<FullScreenMessage type="error" />}>
        {/* Suspense란
        Suspense는 리액트에서 비동기 처리를 할 때 사용하는 컴포넌트입니다.
        로딩 중일 때 보여줄 UI를 설정할 수 있습니다.
        */}
          <Suspense fallback={<FullScreenMessage type="loading" />}>
            <App />
          </Suspense>
        </ErrorBoundary>
      </ModalContext>
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
