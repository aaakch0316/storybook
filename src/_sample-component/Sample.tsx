/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SampleProps {
  test: string;
}

const Sample = (props: SampleProps) => {
  return <div>{props.test}</div>;
};

export default Sample;
