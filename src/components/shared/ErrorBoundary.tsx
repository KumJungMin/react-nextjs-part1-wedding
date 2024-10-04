import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallbackUI?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}


/**
 * ErrorBoundary?
 * 에러가 발생했을 때, 에러 메시지를 보여줄 수 있습니다.
 * 하위 컴포넌트에서 발생하는 JS 관련 에러를 감지하고 fallbackUI를 보여줍니다.
 * https://ko.legacy.reactjs.org/docs/error-boundaries.html
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // componentDidCatch?
  // 하위 컴포넌트에서 발생하는 JS 관련 에러를 감지합니다.
  // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return this.props.fallbackUI ?? <h1>에러가 발생했습니다.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
