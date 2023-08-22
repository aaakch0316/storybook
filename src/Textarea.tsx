/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors } from "./styles/components/commons/colors";

interface TextareaProps {
  /**
   * Textarea placeholder
   */
  label: string;
  /**
   * Input border color
   */
  borderColor: any;
}

const Textarea = (props: TextareaProps) => {
  return <textarea css={style} placeholder={props.label} />;
};

const style = ({ borderColor = "gray7" }) => {
  const border = `solid 1px ${Colors[borderColor]}`;
  return css`
    border: ${border};
  `;
};

export default Textarea;
