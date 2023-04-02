/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, {
  Component,
  ErrorInfo,
  FunctionComponent,
  isValidElement,
  ReactElement,
} from "react";

import { ErrorBoundaryProps, FallbackProps } from "./types";

// type ErrorBoundaryState = { error: Error | null; errorInfo: ErrorInfo | null };

type ErrorBoundaryState = {
  didCatch: boolean;
  error: any; // 왜지?
};

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null,
};

// type ErrorBoundaryState = { error: Error | null; errorInfo: ErrorInfo | null };

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
    return { didCatch: true, error };
  }

  resetErrorBoundary = (...args: any[]) => {
    const { error } = this.state;

    if (error !== null) {
      // this.props.onReset?.({
      //   args,
      //   reason: "imperative-api",
      // });
      alert(">>> 실패한 로직 재시도");

      this.setState(initialState);
    }
  };

  // componentDidCatch(error, errorInfo) {
  // logErrorToMyService(error, errorInfo);
  // }

  render() {
    const {
      children,
      renderFallback,
      // fallback
    } = this.props;
    const { didCatch, error } = this.state;
    let childToRender = children;

    if (didCatch) {
      const props: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      // if (isValidElement(fallback)) {
      // }
      if (typeof renderFallback === "function") {
        // 언제 많이 쓸까요?
        childToRender = renderFallback(props);
      }
    }

    return childToRender;
  }
}

export default ErrorBoundary;
