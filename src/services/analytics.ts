// 手动发送分析事件
export const trackPageView = () => {
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('event', {
      name: 'pageview',
      data: {
        url: window.location.pathname
      }
    })
  }
}

export const trackEvent = (name: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).va) {
    (window as any).va('event', { name, data })
  }
}
