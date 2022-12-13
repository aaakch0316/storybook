/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { handlingCheckboxDetail } from './styles/components/checkbox';
import { Colors } from './styles/components/commons/colors'

interface CheckboxProps {
  /** Checkbox contents*/
  label: string;
  /** Checkbox size */
  size: "lg" | "md" | "sm" | "xs";
  /** Checkobx custom color */
  color: string;
  /** Disabled Checkbox */
  isDisabled: boolean;
  /** [ERROR] Checked Checkbox */
  defaultChecked : boolean;
  /** Warning Checkbox */
  isInvalid: boolean;
}

const Checkbox = ( props: CheckboxProps ) => {
  return (
    <div css={styledContainer}>
      <input
        css={
          style(props)
        } 
        type="checkbox" 
        id="check1" 
        // checked={props.defaultChecked}
        disabled={props.isDisabled}
      />
      <label id="check1" css={styledLabel(props)}>
        {props.label}
      </label>
    </div>
  )
}

const styledContainer = () => {
  return (
    css`
      display: flex;
      align-items: center;
    `
  )
}

const styledLabel = ({isDisabled=false}) => {
  return (
    css`
      color: ${isDisabled? Colors['gray7']:Colors['gray1']}
    `
  )
}

const style = ({
  size = 'md',
  color = 'blue2',
  isInvalid = false,
  isDisabled = false,
  defaultChecked = false
}: CheckboxProps) => {
  return (
    css`
      -webkit-appearance: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${handlingCheckboxDetail.size[size]};
      height: ${handlingCheckboxDetail.size[size]};
      border: 1.5px solid ${!isDisabled ? isInvalid ? Colors['red1'] : Colors['gray1'] : Colors['gray7']};
      border-radius: 3px;
      cursor: pointer;
      margin: 10px;

      
      &:hover {
        // border-color: red;
        // border-color: red;
        // transform: scale(1) translate(-50%, -50%);
      }

      &:checked {

        background-color: ${Colors[color]};
        color: ${Colors['white']};
        
        &::after {
          content: '\\2714';

        }
      }
    `
)};

export default Checkbox;