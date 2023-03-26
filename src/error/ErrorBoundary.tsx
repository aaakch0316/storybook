/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ErrorInfo } from "react";

// type ErrorBoundaryState = { error: Error | null; errorInfo: ErrorInfo | null };

interface ErrorBoundaryPropsWithFallback {
  onResetKeysChange?: (
    prevResetKeys: Array<unknown> | undefined,
    resetKeys: Array<unknown> | undefined
  ) => void;
  onReset?: (...args: Array<unknown>) => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  resetKeys?: Array<unknown>;
  // fallback: React.ReactElement<
  //   unknown,
  //   string | React.FunctionComponent | typeof React.Component
  // > | null;
  renderFallback: RenderFallbackType | null;
  FallbackComponent?: never;
  fallbackRender?: never;
}

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};
type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => React.ReactNode;

// const initialState: ErrorBoundaryState = { error: null, errorInfo: null };

type ErrorBoundaryProps = ErrorBoundaryPropsWithFallback;

// class ErrorBoundary extends React.Component<
//   React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
//   ErrorBoundaryState
// > {
//   constructor(props: any) {
//     super(props);
//     this.state = { error: null, errorInfo: null };
//   }

//   // static getDerivedStateFromError(error) {
//   // return { hasError: true }
//   // }

//   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
//     // Catch errors in any components below and re-render with error message
//     this.setState({
//       error: error,
//       errorInfo: errorInfo,
//     });
//     // You can also log error messages to an error reporting service here
//   }

//   render() {
//     if (this.state.errorInfo) {
//       // Error path
//       return (
//         <div>
//           <h2>Something went wrong.</h2>
//           <details style={{ whiteSpace: "pre-wrap" }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }
//     // Normally, just render children
//     return this.props.children;
//   }
// }

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  // logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
