import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "Error/ErrorBoundary",
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => {
  return (
    <div
      style={{
        background: "#f2f4f6",
        width: "90%",
        height: "70vh",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <ErrorBoundary
        fallback={<div>뜨나 테스트</div>}
        // renderFallback={({ error }) => <div>ttset{error}</div>}
      >
        <h3>div element fallback UI</h3>
        {/* <div onClick={handleErrorGeneration}>event handle ERROR</div> */}
        <RenderTestComponent />
      </ErrorBoundary>

      <ErrorBoundary
        fallbackRender={ErrorAlert}
        // renderFallback={({ error }) => <div>ttset{error}</div>}
      >
        <h3>Fallback UI return</h3>
        {/* <div onClick={handleErrorGeneration}>event handle ERROR</div> */}
        <RenderTestComponent />
      </ErrorBoundary>
    </div>
  );
};

const ErrorAlert = (props: any) => {
  return (
    <>
      <h3>잠시 후 다시 시도해주세요</h3>
      <button onClick={props.resetErrorBoundary}>다시 시도</button>
      {/* error TESTAlert : {error.message} */}
    </>
  );
};

const RenderTestComponent = () => {
  const [error, setError] = useState(false);
  const throwErrorInRender = () => setError(true);

  const throwError = () => {
    throw new Error("Error is back!");
  };

  useEffect(() => {
    if (error) throwError();
  }, [error]);

  return <div onClick={throwErrorInRender}>렌더링 에러 발생 버튼</div>;
};

export const Base = Template.bind({});
Base.args = {};
