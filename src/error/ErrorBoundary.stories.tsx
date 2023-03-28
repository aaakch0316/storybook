import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "Error/ErrorBoundary",
  // id: string | undefined,
  // includeStories: StoryDescriptor | undefined,
  // excludeStories: StoryDescriptor | undefined,
  // component?: ComponentType<...> | undefined,
  // subcomponents?: Record<...> | undefined
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
        renderFallback={ErrorAlert}
        // renderFallback={({ error }) => <div>ttset{error}</div>}
      >
        {/* <div onClick={handleErrorGeneration}>event handle ERROR</div> */}
        <RenderTestComponent />
      </ErrorBoundary>
      {/* <ErrorBoundary fallback={<>hi</>}>
        <RenderTestComponent />
      </ErrorBoundary> */}
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
