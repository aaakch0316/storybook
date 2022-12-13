/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Colors } from './styles/components/commons/colors'
import { handlingInputDetail } from './styles/components/input';

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
   borderColor: any;
}

const Input = (props: InputProps) => {
  return (
    <input 
      type = 'text'
      placeholder={props.label} 
      css={style(props)}
    />
  )
}


const style = ({
  size = 'md',
  variant = 'outline',
  borderColor = 'gray7'

}: InputProps) => {
  const height = handlingInputDetail.size[size]
  const border = (variant === "outline") ? `solid 1px ${Colors[borderColor]}` : 'none'
  const backgroundColor = (variant === "filled") ? Colors['gray9'] : 'none'
  return (
    css`
      border: ${border};
      height: ${height};
      background-color: ${backgroundColor};
      margin:0 0 10px;
      font-family:"Ubuntu Light","Ubuntu","Ubuntu Mono","Segoe Print","Segoe UI";
      border-radius: 3px;
      padding: 0px 10px;
    `
  )
}
/* background-color: red;  */
/* border:`solid 1px ${borderColor}`;  */

export default Input;