/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface FlexProps {
  /** Flex display */
  display: string;
  /** Flex flexDrection */
  flexDrection: "column" | "column-reverse" | "row" | "row-reverse";
  /** Flex justifyContent */
  justifyContent: "flex-start" | "space-between" | "space-around" | "center";
  /** Flex alignItems */
  alignItems: "stretch" | "center" ;
  /** Flex alignContent */
  alignContent: "stretch" | "center" ;
}

const Flex = (props: FlexProps) => {
  return (
    <div
      css={
        style(props)
      }
    >
    </div>
  )
}


const style = ({
  display = 'flex',
  flexDrection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignContent = 'stretch'
}: FlexProps) => {
  return (
    css`
      display : ${display};
      flex-direction : ${flexDrection};
      justify-content : ${justifyContent};
      align-items : ${alignItems};
      align-centent : ${alignContent};
    `
  )
}


export default Flex;
