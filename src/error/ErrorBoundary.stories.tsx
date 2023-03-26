import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import ErrorBoundary from "./ErrorBoundary";

export default {
  title: "Error/ErrorBoundary",
  component: ErrorBoundary,
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => {
  const handleErrorGeneration = () => {
    throw new Error("I crashed!");
  };
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
        renderFallback={({ error }) => <ErrorAlert error={error} />}
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

const ErrorAlert = (error: any) => {
  return <>error TESTAlert</>;
};

const RenderTestComponent = () => {
  const [cnt, setCnt] = useState(0);

  if (cnt > 3) {
    throw new Error("RenderTestComponent component ERROR");
  }

  const handleCnt = () => {
    setCnt((prev) => prev + 1);
  };

  return <div onClick={handleCnt}>{cnt}</div>;
};

export const Base = Template.bind({});
Base.args = {};
