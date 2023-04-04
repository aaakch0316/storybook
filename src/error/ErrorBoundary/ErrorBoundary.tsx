/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, {
  Component,
  createElement,
  ErrorInfo,
  FunctionComponent,
  isValidElement,
  ReactElement,
} from "react";

import { ErrorBoundaryProps, FallbackProps } from "./types";

type ErrorBoundaryState = {
  didCatch: boolean;
  error: Error | null;
};

const initialState: ErrorBoundaryState = {
  didCatch: false,
  error: null,
};

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
    const { children, fallbackRender, fallback, FallbackComponent } =
      this.props;
    const { didCatch, error } = this.state;
    let childToRender = children;

    if (didCatch && error) {
      const props: FallbackProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      if (isValidElement(fallback)) {
        childToRender = fallback;
      } else if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = createElement(FallbackComponent, props);
      } else {
        throw new Error(
          "error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
        );
      }
    }

    return childToRender;
  }
}

export default ErrorBoundary;
