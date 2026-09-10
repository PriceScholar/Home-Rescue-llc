import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexDirection: 'column',
          background: '#FAF6EE', fontFamily: 'Manrope, sans-serif',
          padding: '2rem', textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h2 style={{ color: '#08264B', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#5C6B82', marginBottom: '1.5rem', maxWidth: '400px' }}>
            We've noted the issue. Please refresh the page or contact us on WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              aria-label="Refresh page"
              onClick={() => window.location.reload()}
              style={{ background: '#08264B', color: '#fff', border: 'none',
                padding: '12px 24px', borderRadius: '12px', cursor: 'pointer',
                fontWeight: '700', fontSize: '14px' }}>
              Refresh Page
            </button>
            <a
              href="https://wa.me/971524524295"
              aria-label="Contact us on WhatsApp"
              style={{ background: '#1FA463', color: '#fff',
                padding: '12px 24px', borderRadius: '12px',
                fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
