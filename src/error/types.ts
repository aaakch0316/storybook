type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
};
type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>
) => React.ReactNode;

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
  renderFallback: RenderFallbackType;
  FallbackComponent?: never;
  fallbackRender?: never;
}

export type FallbackProps = {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
};

export type ErrorBoundaryProps = ErrorBoundaryPropsWithFallback;
