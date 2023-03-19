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
      <ErrorBoundary>
        <div onClick={handleErrorGeneration}>event handle ERROR</div>
      </ErrorBoundary>
      <ErrorBoundary>
        <RenderTestComponent />
      </ErrorBoundary>
    </div>
  );
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
