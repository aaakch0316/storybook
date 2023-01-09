/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SelectProps {
  /** Select children */
  children: React.ReactNode;
  /** Select size */
  size: "xs" | "sm" | "md" | "lg";
  /** Select background color */
  bg: "red" | "blue" | "red" | "orange";
  /** Select borderColor */
  borderColor: "red" | "blue" | "red";
  /** Select spacing */
  color: "red" | "blue" | "red";
  /** Select justifyContent */
  placeholder: string;
}

/**
 * 
native Element 와 같은 인터페이스, 기능을 가지도록한다.
[react]
키보드, 마우스 액션으로 옵션 리스트 영역을 열고 닫기가 가능 - open 상태 필요
옵션 검색 가능
키보드 액션으로 선택 가능
 */
const Select = (props: SelectProps) => {
  const { children, placeholder } = props;
  return (
    <select css={style(props)}>
      <option>{placeholder}</option>
      {children}
    </select>
  );
};

// size: "xs" | "sm" | "md" | "lg";
const style = ({
  size = "md",
  bg = "red",
  borderColor = "blue",
  color = "red",
}: SelectProps) => {
  const pxSize = {
    xs: "24px",
    sm: "32px",
    md: "40px",
    lg: "48px",
  };
  return css`
    width: 100%;
    padding: 0px 15px;
    height: ${pxSize[size]};
    border: 1px solid ${borderColor};
    color: ${color};
    background: ${bg};
    -webkit-appearance: none; /* 네이티브 외형 감추기 */
    -moz-appearance: none;
    appearance: none;
  `;
};

export default Select;
