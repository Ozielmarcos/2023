import styled from "styled-components";
import { BoxBaseProps } from "./props";

export const BoxBase = styled.div<BoxBaseProps>`
width: ${(props) => props.$width};
height: ${(props) => props.$height};
margin: ${(props) => props.$margin};
padding: ${(props) => props.$padding};
background-color: ${(props) => props.$backgroundColor};
border-radius: ${(props) => props.$borderRadius};
box-sizing: ${(props) => props.$boxSizing};
display: ${(props) => props.$display};
flex-direction: ${(props) => props.$flexDirection};
align-items: ${(props) => props.$alignItems};
justify-content: ${(props) => props.$justifyContent};
row-gap: ${(props) => props.$rowGap};
column-gap: ${(props) => props.$columnGap};
`