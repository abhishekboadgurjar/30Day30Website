export function reportWebVitals(metric: any) {
  const { id, name, label, value } = metric;

  // Analytics implementation
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js Metrics',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
  }
}

export function measurePerformance(name: string) {
  if (typeof window === 'undefined' || !window.performance) return;

  const start = performance.now();
  return () => {
    const duration = performance.now() - start;
    console.log(`${name} took ${duration}ms`);
  };
}

declare global {
  interface Window {
    gtag: (command: string, name: string, params: any) => void;
  }
}
