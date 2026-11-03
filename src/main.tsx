import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFFDF8] text-[#151515] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md p-8 bg-white rounded-3xl shadow-xl border border-[#151515]/10 space-y-4">
            <h1 className="text-2xl font-serif font-bold text-[#151515]">
              Italia Alimentari
            </h1>
            <p className="text-sm text-[#68645B] leading-relaxed">
              Il sito si sta aggiornando. Fai clic sul pulsante qui sotto per ricaricare.
            </p>
            <button
              onClick={() => {
                try {
                  localStorage.clear();
                } catch {}
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-[#FFC900] hover:bg-[#EAB600] text-[#151515] font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              Ricarica Pagina
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
