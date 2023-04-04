import {
  Component,
  ComponentType,
  FunctionComponent,
  ReactElement,
} from "react";

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: (...args: any[]) => void;
};

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};
type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => React.ReactNode;

type ErrorBoundarySharedProps = {
  onError?: (error: Error, info: { componentStack: string }) => void;
  // onReset?: (...args: Array<unknown>) => void;
  onReset?: (
    details:
      | { reason: "imperative-api"; args: any[] }
      | { reason: "keys"; prev: any[] | undefined; next: any[] | undefined }
  ) => void;
  // resetKeys?: Array<unknown>;
  resetKeys?: any[];
};

interface ErrorBoundaryPropsWithComponent extends ErrorBoundarySharedProps {
  fallback: never;
  FallbackComponent?: ComponentType<FallbackProps>;
  fallbackRender?: never;
}

interface ErrorBoundaryPropsWithRender extends ErrorBoundarySharedProps {
  fallback?: never;
  FallbackComponent?: never;
  fallbackRender: RenderFallbackType;
}

interface ErrorBoundaryPropsWithFallback extends ErrorBoundarySharedProps {
  // onResetKeysChange?: (
  //   prevResetKeys: Array<unknown> | undefined,
  //   resetKeys: Array<unknown> | undefined
  // ) => void;
  fallback?: ReactElement<
    unknown,
    string | FunctionComponent | typeof Component
  > | null;
  FallbackComponent?: never;
  fallbackRender?: never;
}

export type ErrorBoundaryProps =
  | ErrorBoundaryPropsWithFallback
  | ErrorBoundaryPropsWithComponent
  | ErrorBoundaryPropsWithRender;
