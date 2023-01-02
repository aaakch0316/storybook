/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { handlingButtonDetail } from './styles/components/button'
import { Colors } from './styles/components/commons/colors'

interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Button contents
   */
  size?: "lg" | "md" | "sm" | "xs";
  /**
   * Button colors
   */
  color: any;
  /**
   * Button fontColor
   */
  fontSize: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button 
      css={
        style(props)
      }
    >
      {props.label}
    </button>
  )
}

const style = ({
  size = 'md',
  color = 'blue2'
}: ButtonProps) => {
  const height : string = handlingButtonDetail.height[size]
  const background  = Colors[color]
  return (
    css`
      outline: none;
      border: none;
      box-sizing: border-box;
      height: ${height};
      background: ${background};
      font-size: 0.875rem;
      padding: 0.5rem 1rem;
      color: white;
      border-radius: 0.25rem;
      line-height: 1;
      font-weight: 600;
      &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
      }
      &:hover {
        background: #38d9a9;
      }
      &:active {
        background: #12b886;
      }
    `
)};

export default Button;
