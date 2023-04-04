import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import SSRSafeSuspense from "./SSRSafeSuspense";

export default {
  title: "Error/SSRSafeSuspense",
} as ComponentMeta<typeof SSRSafeSuspense>;

const Template: ComponentStory<typeof SSRSafeSuspense> = (args) => {
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
      <h1>SSRSafeSuspense</h1>
      <SSRSafeSuspense fallback={<div>로오딩</div>}>
        <ProfilePage />
      </SSRSafeSuspense>
    </div>
  );
};

function ProfilePage() {
  useEffect(() => {
    function sleep(ms: number) {
      const wakeUpTime = Date.now() + ms;
      while (Date.now() < wakeUpTime) {}
    }
    sleep(2000);
  }, []);

  return <>화면 탄생</>;
}

export const Base = Template.bind({});
Base.args = {};
