/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors } from "./styles/components/commons/colors";
import { handlingInputDetail } from "./styles/components/input";

interface InputProps {
  /**
   * Input placeholder
   */
  label: string;
  /**
   * Input size
   */
  size: "lg" | "md" | "sm" | "xs";
  /**
   * Input Type
   */
  variant: "outline" | "unstyled" | "filled";
  /**
   * Input border color
   */
  borderColor: string;
}

const Input = (props: InputProps) => {
  return (
    <div
      style={{
        border: "solid",
        width: "70vw",
        height: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "",
      }}
    >
      <input type="text" placeholder={props.label} css={style(props)} />
      <input type="text" placeholder={props.label} css={style(props)} />
    </div>
  );
};

const style = ({
  size = "md",
  variant = "outline",
  borderColor = "blue2",
}: InputProps) => {
  let returnStyle;
  const height = handlingInputDetail.size[size];
  const border =
    variant === "outline" ? `solid 1px ${Colors[borderColor]}` : "none";

  switch (variant) {
    case "filled":
      return css`
        width: 90%;
        font-weight: 400;
        font-size: 0.85rem;
        border: ${border};
        height: ${height};
        background-color: ${Colors["gray10"]};
        margin: 0 0 10px;
        border-radius: 3px;
        padding: 0px 10px;
      `;
    case "unstyled":
      return css`
        width: 90%;

        font-weight: 400;
        font-size: 0.85rem;
        border: ${border};
        height: ${height};
        margin: 0 0 10px;
        border-radius: 3px;
        padding: 0px 10px;
      `;
    default:
      return css`
        width: 90%;
        font-weight: 400;
        font-size: 0.85rem;
        border: ${border};
        height: ${height};
        margin: 0 0 10px;
        border-radius: 3px;
        padding: 0px 10px;
      `;
  }
};
/* background-color: red;  */
/* border:`solid 1px ${borderColor}`;  */

export default Input;
