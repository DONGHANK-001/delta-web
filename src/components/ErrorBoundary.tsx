import * as React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-red-100">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">糟糕！網頁發生錯誤</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              我們在加載資料時遇到了問題（可能是網路連線或權限錯誤）。請嘗試重新整理頁面。
            </p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-delta-blue text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              <RefreshCw className="w-5 h-5" />
              重新整理網頁
            </button>
            {process.env.NODE_ENV === 'development' && (
              <pre className="mt-8 p-4 bg-slate-100 rounded-xl text-left text-xs overflow-auto max-h-40 text-red-600">
                {error?.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
