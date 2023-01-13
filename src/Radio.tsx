/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Stack from "./helpers/Stack";
import { Colors } from "./styles/components/commons/colors";

interface RadioProps {
  /**
   * Radio size
   */
  size: "md" | "lg" | "sm";
  /**
   * Radio colorScheme
   */
  colorScheme: "red" | "blue" | "orange" | "black";
  /**
   * Radio colorScheme
   */
  fontColor: "red" | "blue" | "orange" | "black";
  /**
   * Radio colorScheme
   */
  isDisabled: boolean;
}

const sizeSelector = {
  md: "1.5em",
  lg: "2em",
  sm: "2.5em",
};

const Radio = (props: RadioProps) => {
  const { isDisabled, size } = props;
  return (
    <div css={style(props)}>
      <input
        style={{
          // appearance: "none",
          // border: "2px solid red",
          // backgroundColor: "green",
          // borderRadius: "50%",
          // color: "red",
          width: sizeSelector[size],
          height: sizeSelector[size],
        }}
        disabled={isDisabled}
        type="radio"
        id="radio-button"
      />
      <label htmlFor="radio-button">Option text</label>
    </div>
  );
};
{
  /* <textarea css={style} placeholder={props.label} />; */
}

const style = ({
  size = "md",
  colorScheme = "blue",
  fontColor = "black",
  isDisabled = false,
}) => {
  return css`
    color: ${isDisabled ? "gray" : fontColor};
    cursor: ${isDisabled ? "not-allowed" : ""};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  `;
};

export default Radio;
